/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Interest = require("../model/interest");


exports.findAll = function(req, res){
    return Interest.find({}, function(err, interests){
        if(err) {
            var response = {
                action:'get all interests',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all interests',
                status:'success',
                data:interests,
                dataType:'interestArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var interestId = req.params.interestId;
    Interest.findById(interestId, function(err, interest){
        if(err) {
            var response = {
                action:'get interests '+interestId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get interest '+interestId,
                status:'success',
                data:interest,
                dataType:'interest',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var interestIds = req.params.interestIds;
    Interest.findByIds(interestIds, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Interest.findByUserId(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Interest.findByUserIds(userIds, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Interest.findById(userId, function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityZero(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityFirst(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximitySecond(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityThird(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Interest.findById(userId, function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Interest.findByProximityZero(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Interest.findByProximityFirst(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Interest.findByProximitySecond(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Interest.findByProximityThird(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Interest.findById(userId, function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityZero(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityFirst(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximitySecond(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityThird(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Interest.findById(userId, function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityZero(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityFirst(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximitySecond(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Interest.findByProximityThird(userId, function(err, interests){
        if(err){
            
        }
        else if(!interests){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var interest = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    interest = new Interest(interest);
    interest.create(function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var interestId = req.params.interestId;
    var interest = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Interest.findOneAndUpdate(interestId, interest, function(err, interest){
        if(err){
            
        }
        else if(!interest){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var interestId = req.params.interestId;
    Interest.remove(interestId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

