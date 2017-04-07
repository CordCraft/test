/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ProximityStream = require("../model/proximityStream");


exports.findAll = function(req, res){
    return ProximityStream.find({}, function(err, proximityStreams){
        if(err) {
            var response = {
                action:'get all proximityStreams',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all proximityStreams',
                status:'success',
                data:proximityStreams,
                dataType:'proximityStreamArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var proximityStreamId = req.params.proximityStreamId;
    ProximityStream.findById(proximityStreamId, function(err, proximityStream){
        if(err) {
            var response = {
                action:'get proximityStreams '+proximityStreamId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get proximityStream '+proximityStreamId,
                status:'success',
                data:proximityStream,
                dataType:'proximityStream',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var proximityStreamIds = req.params.proximityStreamIds;
    ProximityStream.findByIds(proximityStreamIds, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByUserId(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    ProximityStream.findByUserIds(userIds, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findById(userId, function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityZero(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityFirst(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximitySecond(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityThird(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    ProximityStream.findById(userId, function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    ProximityStream.findByProximityZero(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    ProximityStream.findByProximityFirst(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    ProximityStream.findByProximitySecond(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    ProximityStream.findByProximityThird(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findById(userId, function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityZero(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityFirst(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximitySecond(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityThird(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findById(userId, function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityZero(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityFirst(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximitySecond(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    ProximityStream.findByProximityThird(userId, function(err, proximityStreams){
        if(err){
            
        }
        else if(!proximityStreams){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var proximityStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    proximityStream = new Proximity(proximityStream);
    proximityStream.create(function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var proximityStreamId = req.params.proximityStreamId;
    var proximityStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    ProximityStream.findOneAndUpdate(proximityStreamId, proximityStream, function(err, proximityStream){
        if(err){
            
        }
        else if(!proximityStream){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var proximityStreamId = req.params.proximityStreamId;
    ProximityStream.remove(proximityStreamId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

