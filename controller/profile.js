/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Profile = require("../model/profile");


exports.findAll = function(req, res){
    return Profile.find({}, function(err, profiles){
        if(err) {
            var response = {
                action:'get all profiles',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all profiles',
                status:'success',
                data:profiles,
                dataType:'profileArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var profileId = req.params.profileId;
    Profile.findById(profileId, function(err, profile){
        if(err) {
            var response = {
                action:'get profiles '+profileId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get profile '+profileId,
                status:'success',
                data:profile,
                dataType:'profile',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var profileIds = req.params.profileIds;
    Profile.findByIds(profileIds, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Profile.findByUserId(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Profile.findByUserIds(userIds, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Profile.findById(userId, function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityZero(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityFirst(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximitySecond(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityThird(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Profile.findById(userId, function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Profile.findByProximityZero(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Profile.findByProximityFirst(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Profile.findByProximitySecond(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Profile.findByProximityThird(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Profile.findById(userId, function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityZero(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityFirst(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximitySecond(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityThird(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Profile.findById(userId, function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityZero(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityFirst(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximitySecond(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Profile.findByProximityThird(userId, function(err, profiles){
        if(err){
            
        }
        else if(!profiles){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var profile = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    profile = new Profile(profile);
    profile.create(function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var profileId = req.params.profileId;
    var profile = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Profile.findOneAndUpdate(profileId, profile, function(err, profile){
        if(err){
            
        }
        else if(!profile){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var profileId = req.params.profileId;
    Profile.remove(profileId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

