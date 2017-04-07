/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Audio = require("../model/audio");


exports.findAll = function(req, res){
    return Audio.find({}, function(err, audios){
        if(err) {
            var response = {
                action:'get all audios',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all audios',
                status:'success',
                data:audios,
                dataType:'audioArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var audioId = req.params.audioId;
    Audio.findById(audioId, function(err, audio){
        if(err) {
            var response = {
                action:'get audios '+audioId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get audio '+audioId,
                status:'success',
                data:audio,
                dataType:'audio',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var audioIds = req.params.audioIds;
    Audio.findByIds(audioIds, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Audio.findByUserId(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Audio.findByUserIds(userIds, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Audio.findById(userId, function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityZero(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityFirst(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximitySecond(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityThird(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Audio.findById(userId, function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Audio.findByProximityZero(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Audio.findByProximityFirst(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Audio.findByProximitySecond(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Audio.findByProximityThird(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Audio.findById(userId, function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityZero(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityFirst(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximitySecond(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityThird(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Audio.findById(userId, function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityZero(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityFirst(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximitySecond(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Audio.findByProximityThird(userId, function(err, audios){
        if(err){
            
        }
        else if(!audios){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var audio = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    audio = new Audio(audio);
    audio.create(function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var audioId = req.params.audioId;
    var audio = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Audio.findOneAndUpdate(audioId, audio, function(err, audio){
        if(err){
            
        }
        else if(!audio){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var audioId = req.params.audioId;
    Audio.remove(audioId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};



exports.play = function(req, res){
    
    return null;
};


exports.pause = function(req, res){
    return null;
};


exports.stop = function(req, res){
    return null;
};


exports.resumeAt = function(req, res){
    return null;
};