/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Employment = require("../model/employment");


exports.findAll = function(req, res){
    return Employment.find({}, function(err, employments){
        if(err) {
            var response = {
                action:'get all employments',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all employments',
                status:'success',
                data:employments,
                dataType:'employmentArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var employmentId = req.params.employmentId;
    Employment.findById(employmentId, function(err, employment){
        if(err) {
            var response = {
                action:'get employments '+employmentId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get employment '+employmentId,
                status:'success',
                data:employment,
                dataType:'employment',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var employmentIds = req.params.employmentIds;
    Employment.findByIds(employmentIds, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Employment.findByUserId(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Employment.findByUserIds(userIds, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Employment.findById(userId, function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityZero(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityFirst(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximitySecond(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityThird(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Employment.findById(userId, function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Employment.findByProximityZero(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Employment.findByProximityFirst(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Employment.findByProximitySecond(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Employment.findByProximityThird(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Employment.findById(userId, function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityZero(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityFirst(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximitySecond(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityThird(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Employment.findById(userId, function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityZero(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityFirst(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximitySecond(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Employment.findByProximityThird(userId, function(err, employments){
        if(err){
            
        }
        else if(!employments){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var employment = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    employment = new Employment(employment);
    employment.create(function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var employmentId = req.params.employmentId;
    var employment = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Employment.findOneAndUpdate(employmentId, employment, function(err, employment){
        if(err){
            
        }
        else if(!employment){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var employmentId = req.params.employmentId;
    Employment.remove(employmentId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

