/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ImageStream = require("../model/imageStream");


exports.findAll = function(req, res){
    return ImageStream.find({}, function(err, imageStreams){
        if(err) {
            var response = {
                action:'get all imageStreams',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all imageStreams',
                status:'success',
                data:imageStreams,
                dataType:'imageStreamArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var imageStreamId = req.params.imageStreamId;
    ImageStream.findById(imageStreamId, function(err, imageStream){
        if(err) {
            var response = {
                action:'get imageStreams '+imageStreamId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get imageStream '+imageStreamId,
                status:'success',
                data:imageStream,
                dataType:'imageStream',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var imageStreamIds = req.params.imageStreamIds;
    ImageStream.findByIds(imageStreamIds, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByUserId(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    ImageStream.findByUserIds(userIds, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    ImageStream.findById(userId, function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityZero(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityFirst(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximitySecond(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityThird(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    ImageStream.findById(userId, function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    ImageStream.findByProximityZero(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    ImageStream.findByProximityFirst(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    ImageStream.findByProximitySecond(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    ImageStream.findByProximityThird(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    ImageStream.findById(userId, function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityZero(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityFirst(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximitySecond(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityThird(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    ImageStream.findById(userId, function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityZero(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityFirst(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximitySecond(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    ImageStream.findByProximityThird(userId, function(err, imageStreams){
        if(err){
            
        }
        else if(!imageStreams){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var imageStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    imageStream = new ImageStream(imageStream);
    imageStream.create(function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var imageStreamId = req.params.imageStreamId;
    var imageStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    ImageStream.findOneAndUpdate(imageStreamId, imageStream, function(err, imageStream){
        if(err){
            
        }
        else if(!imageStream){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var imageStreamId = req.params.imageStreamId;
    ImageStream.remove(imageStreamId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

