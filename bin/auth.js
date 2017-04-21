/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var authApp = express();
var io = require('../server');
var jwt = require('jsonwebtoken');
var secrets = require('../config/jwt-secret');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var TokenStrategy = require('passport-token-auth');
var FacebookStrategy = require('passport-facebook');
var GoogleStrategy = require('passport-google');
var LinkedinStrategy = require('passport-linkedin');
var TwitterStrategy = require('passport-twitter');
var InstagramStrategy = require('passport-instagram');


var Authentication = require('../model/authentication');
var App = require('../model/app');
var Admin = require('../model/admin');


var access = require('../config/accessType');



passport.use('local', new LocalStrategy({passReqToCallback:true}, login));

/*
passport.use(new FacebookStrategy(function(var1, var2, done){
    done(null, true);
}));


passport.use(new GoogleStrategy(function(var1, var2, done){
    done(null, true);
}));


passport.use(new LinkedinStrategy(function(var1, var2, done){
    done(null, true);
}));


passport.use(new TwitterStrategy(function(var1, var2, done){
    done(null, true);
}));


passport.use(new InstagramStrategy(function(var1, var2, done){
    done(null, true);
}));*/

authApp.use(passport.initialize());



authApp.set('validateAppCredentials', validateAppCredentials);
authApp.set('validateAuthCredentials', validateAuthCredentials);
authApp.set('validateAllCredentials', validateAppCredentials, validateAuthCredentials);



authApp.get('/', getHere);
authApp.post('/devSignup', signupApp);
authApp.post('/login', passport.authenticate('local', {session:false}),respond);
authApp.get('/logout', logout);



/*
authApp.post('/facebook', passport.authenticate('facebook', {session:false}),
    serialize, generateToken, respond
);


authApp.post('/twitter', passport.authenticate('twitter', {session:false}),
    serialize, generateToken, respond
);


authApp.post('/google', passport.authenticate('google', {session:false}),
    serialize, generateToken, respond
);


authApp.post('/linkedin', passport.authenticate('linkedin', {session:false}),
    serialize, generateToken, respond
);


authApp.post('/instagram', passport.authenticate('instagram', {session:false}),
    serialize, generateToken, respond
);

*/






function getHere(req, res){
    res.json({
        action:"no action",
        status:"not authenticated"
    });
    return true;
}

function login(req, username, password, done){
    if(username && password){
        Authentication.findOne({'local.username':username}, function(err, authentication){
            if(err) throw err;
            //If user doesn't exist in the database: Create new user.
            if(!authentiction){
                error = {
                    action:"login",
                    status:"failed",
                    reason:"username does not exist"
                };
                req.error = error;
                return done(null, error);
            }
            //Otherwise, if user exist in the database: Login user.
            else{
                var passwordIsValid = authentication.local.password === password;
                
                //If password provided is not valid: Send error.
                if(!passwordIsValid){
                    error = {
                        action:"authentication",
                        status:"failed",
                        reason:"invalid password"
                    };
                    req.error = error;
                    return done(null, error);
                }
                
                //Otherwise, if password is valid: store user in request Object
                //And send user.
                else{
                    var response = {
                        action:'login',
                        data: authentication,
                        dataType:'user',
                        status:'success'
                    };
                    req.response = response;
                    return done(null, req.response);
                }
            }
        });
    }
};

function validateAppCredentials(req, res, next){
    var app = {};
    app.appKey = req.headers.app_key;
    app.appSecret = req.headers.app_secret;
    if(!(app.appKey && app.appSecret)){
        var response = {
            action:'app authentication',
            status:'failed',
            type:401,
            reason: 'appKey and/or appSecret cannot be empty'
        };
        res.status(401).json(response);
        return false;
    }
    else{
        App.findByKeyAndSecret(app.appKey, app.appSecret, 
        function(err, app){
            if(err){
                var response = {
                    action: 'app authentication',
                    status: 'failed',
                    type: 401,
                    reason: err
                };
                res.status(401).json(response);
                return false;
            }
            else if(!app){
                var response = {
                    action: 'app authentication',
                    status: 'failed',
                    type: 401,
                    reason: 'wrong appKey and/or appSecret'
                };
                res.status(401).json(response);
                return false;
            }
            else{
                req.app = app;
                return next();
            }
        });
    }
        
}

function validateAuthCredentials(req, res){
    var accessToken = req.accessToken;
    if(!accessToken){
        var response = {
            action: 'user authentication',
            status: 'failed',
            type: 401,
            reason: 'access token cannot be empty. Provide accessToken or login'
        };
        res.status(401).json(response);
        return false;
    }
    AccessToken.findOne({token:accessToken}, function(err, token){
        if(err)return done(err);
        var userId = token.userId;
        if(!userId) return done(null, false);
        User.findById(userId, function(err, user){
            if(err){
                var response = {
                    action: 'user authentication',
                    status: 'failed',
                    type: 401,
                    reason: err
                };
                res.status(401).json(response);
                return false;
            }
            else if(!user){
                var response = {
                    action: 'user authentication',
                    status: 'failed',
                    type: 401,
                    reason: "wrong user credentials. Please try again with another"
                };
                res.status(401).json(response);
                return false;
            }
            else{
                io.set("accessToken", accessToken);
                req.user = user;
                return user;
            }
        });
    });
}

exports.validateJawadAccess = function(req, res){
    
};

exports.validateMeetAccess = function(req, res){
    
};

exports.validatePublicAccess = function(req, res){
  var userId = req.userId;
  if(!userId){
      
  }
  else{
      res.status(200).json(req.response);
  }
};


exports.validateEditorAccess = function(req, res){
    var dataUserId = req.response.data.userId;
    var userId = req.user._id;
    if(!(dataUserId === userId) || !userId){
        var response = {
            action: "access api",
            status: "failed",
            reason: "editor access only"
        };
        res.status(400).json(response);
        return false;
    }
    else{
        req.status(200).json(req.response);
    }
};


exports.validateAdminAccess = function(req, res){
    var userId = req.user._id;
    if(!userId) {
        var response = {
            action:'access api',
            status:"failed",
            reason:"admin access only"
        };
        res.status(400).json(response);
        return null;
    }
    return Admin.findOne({userId:userId}, function(err, admin){
        if(err){
            var response = {
                action: 'access api',
                status: "failed",
                reason: err
            };
            res.status(400).json(response);
            return null;
        }
        else if(!admin){
            var response = {
                action: 'access api',
                status: "failed",
                reason: "admin access only. Empty"
            };
            res.status(400).json(response);
            return null;
        }
        else{
            res.status(200).json(req.response);
            return req.response;
        }
    });
};


exports.validateProximityZeroAccess = function(req, res){
    
};

exports.validateProximtyFirstAccess = function(req, res){
    
};

exports.validateProximitySecondAccess = function(req, res){
    validateProximityZeroAccess(req, res);
    
    
};

exports.validateProximityThirdAccess = function(req, res){
    validateProximityFirstAccess(req, res);
    
    
};

exports.validateCustomAccess = function(req, res){
    
};

exports.validateAccess = function(req, res){   
    var accessType = req.accessType;
    switch(accessType){
        case access.JAWAD: validateJawadAccess(req, res); break;
        case access.ADMIN: validateAdminAccess(req, res); break;
        case access.EDITOR: validateEditorAccess(req, res); break;
        case access.DEVELOPER: validateAppAccess(req,res); break;
        case access.NETWORK: validateNetworkAccss(req, res); break;
        case access.MEET: validateMeetAccess(req, res); break;
        case access.PROXIMITY_0: validateProximityZeroAccess(req, res); break;
        case access.PROXIMITY_1: validateProximityFirstAccess(req, res); break;
        case access.PROXIMITY_2: validateProximitySecondAccess(req, res); break;
        case access.PROXIMITY_3: validateProximityThirdAccess(req, res); break;
        case access.PUBLIC: validatePublicAccess(req, res); break;
        default: return function(){
            var response = {
                action:'document access',
                status:'failed',
                reason:'invalid access type'
            };
            res.status(401).json(response);
            return null;
        };
    }
};





var Network = require('../model/network');
var Admin = require('../model/admin');
var access = require('../config/accessType');
var jChecker = require('../config/jawad');
exports.classifyAccessor = function(userId, accessorId, callback){
    if(jChecker.checkIfJawad(accessorId)){
        var accessType = access.JAWAD;
        return callback(null, accessType);
    };
    Admin.findById(accessorId, function(err, admin){
        if(err) callback(err);
        else if(!admin) {
            return callback(null, false);
        }
        else{
            var accessType = access.ADMIN;
            return callback(null, accessType);
        }
    });
    if(userId === accessorId){
        var accessType = access.EDITOR;
        return callback(null, accessType);
    };
    var query = {bond:{$and:[userId, accessorId]}};
    Network.find(query, function(err, network){
        if(err) callback(err);
        else{
            if(network.shared){
                var accessType = access.SHARER;
                return callback(null, accessType);
            }
            else if(network.confirmed){
                var accessType = access.NETWORK;
                return callback(null, accessType);
            }
            else if(network.meet){
                var accessType = access.MEET;
                return callback(null, accessType);
            }
            else{
                var accessType = access.PUBLIC;
                return callback(null, accessType);
            }
        }
    });
};


function signupApp(req, res){
    var appInit = {};
    appInit.appName = req.body.appName;
    appInit.accessType = req.body.accessType;
    if(!(appInit.appName && appInit.accessType)){
        var response = {
            action:'app signup',
            status:'failed',
            reason:"appName and/or accessType cannot be empty"
        };
        res.status(400).json(response);
    }
    else{
        var app = new App(appInit);
        app.genAndSave(function(err, app){
                if(err) {
                    var response = {
                        action:'app signup',
                        status:'failed',
                        reason: err
                    };
                    res.status(400).json(response);
                }
                else if(!app){
                    var response = {
                        action:'develooper signup',
                        status:'failed',
                        reason:'app empty'
                    };
                    res.status(400).json(response);
                }
                else{
                    var response = {
                        action:'app signup',
                        status:'success',
                        data: app,
                        dataType: 'app'
                    };
                    res.status(200).json(response);
                }
            }); 
    }
}

function logout (req, res){
    req.logout =true;
    var user = req.user;
    if(!user){
        res.json({
            action:"logout",
            status:"success"
        });
    }
    else{
        res.json({
            action:"logout",
            status:"failed",
            reason:""
        });
    }
}

function respond(req, res){
    if(req.error){
        var error = req.error;
        res.status(500).json(error);
    }
    else{
        var response = req.response;
        res.status(200).json(response);
    }
}



module.exports = authApp;