/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Log = require("../model/log");


exports.findAll = function(req, res){
    return Log.find({}, function(err, logs){
        if(err) {
            var response = {
                action:'get all logs',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all logs',
                status:'success',
                data:logs,
                dataType:'logArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var logId = req.params.logId;
    Log.findById(logId, function(err, log){
        if(err) {
            var response = {
                action:'get logs '+logId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get log '+logId,
                status:'success',
                data:log,
                dataType:'log',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var logIds = req.params.logIds;
    Log.findByIds(logIds, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Log.findByUserId(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Log.findByUserIds(userIds, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Log.findById(userId, function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityZero(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityFirst(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Log.findByProximitySecond(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityThird(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Log.findById(userId, function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Log.findByProximityZero(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Log.findByProximityFirst(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Log.findByProximitySecond(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Log.findByProximityThird(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Log.findById(userId, function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityZero(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityFirst(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Log.findByProximitySecond(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityThird(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Log.findById(userId, function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityZero(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityFirst(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Log.findByProximitySecond(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Log.findByProximityThird(userId, function(err, logs){
        if(err){
            
        }
        else if(!logs){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var log = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    log = new Log(log);
    log.create(function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var logId = req.params.logId;
    var log = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Log.findOneAndUpdate(logId, log, function(err, log){
        if(err){
            
        }
        else if(!log){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var logId = req.params.logId;
    Log.remove(logId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};


