/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var AudioStream = require("../model/audioStream");
var events = require('events');
var emitter  = new events.EventEmitter();


function respond(req, res, response){
    req.response = response;
    res.status(response.code).json(response);
    emitter.emit(response.event, req);
}


exports.findAll = function(req, res){
    return AudioStream.find({}, function(err, audioStreams){
        if(err) {
            var response = {
                action:'get all audioStreams',
                status:'failed',
                event:'audio_findAll_failed',
                reason:err,
                code:500
            };
            respond(req, res, response);
            return null;
        }
        else{
            var response = {
                action:'get all audioStreams',
                status:'success',
                event:'audio_findAll_successful',
                data:audioStreams,
                dataType:'audioStreamArr',
                code:200
            };
            respond(req, res, response);
        }
    });
};


exports.findById = function(req, res){
    var audioStreamId = req.params.audioStreamId;
    AudioStream.findById(audioStreamId, function(err, audioStream){
        if(err) {
            var response = {
                action:'get audioStreams '+audioStreamId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get audioStream '+audioStreamId,
                status:'success',
                data:audioStream,
                dataType:'audioStream',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var audioStreamIds = req.params.audioStreamIds;
    AudioStream.findByIds(audioStreamIds, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByUserId(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    AudioStream.findByUserIds(userIds, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    AudioStream.findById(userId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
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


exports.start = function(req, res){
    
};


exports.play = function(req, res){
    
};


exports.pause = function(req, res){
    
};

exports.resumeAt = function(req, res){
    
};

exports.stop = function(req, res){
    
};

exports.replay = function(req, res){
    
};


exports.onStart = function(req, res){
    
};


exports.onPlay = function(){
    
};


exports.onStop = function(){
    
};


exports.onResume = function(){
    
};


exports.onReplay = function(){
    
};


exports.onCreate = function(){
    
};


exports.onFindAll = function(){
    
};


exports.onFindById = function(){
    
};


exports.onFindByUserIds = function(){
    
};


exports.onFindByUserId = function(){
    
};


