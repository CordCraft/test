/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Education = require("../model/education");


exports.findAll = function(req, res){
    return Education.find({}, function(err, educations){
        if(err) {
            var response = {
                action:'get all educations',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all educations',
                status:'success',
                data:educations,
                dataType:'educationArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var educationId = req.params.educationId;
    Education.findById(educationId, function(err, education){
        if(err) {
            var response = {
                action:'get educations '+educationId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get education '+educationId,
                status:'success',
                data:education,
                dataType:'education',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var educationIds = req.params.educationIds;
    Education.findByIds(educationIds, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Education.findByUserId(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Education.findByUserIds(userIds, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Education.findById(userId, function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityZero(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityFirst(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Education.findByProximitySecond(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityThird(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Education.findById(userId, function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Education.findByProximityZero(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Education.findByProximityFirst(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Education.findByProximitySecond(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Education.findByProximityThird(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Education.findById(userId, function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityZero(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityFirst(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Education.findByProximitySecond(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityThird(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Education.findById(userId, function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityZero(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityFirst(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Education.findByProximitySecond(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Education.findByProximityThird(userId, function(err, educations){
        if(err){
            
        }
        else if(!educations){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var education = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    education = new Education(education);
    education.create(function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var educationId = req.params.educationId;
    var education = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Education.findOneAndUpdate(educationId, education, function(err, education){
        if(err){
            
        }
        else if(!education){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var educationId = req.params.educationId;
    Education.remove(educationId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

