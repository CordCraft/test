var VideoStream = require("../model/videoStream");


exports.findAll = function(req, res){
    return VideoStream.find({}, function(err, videoStreams){
        if(err) {
            var response = {
                action:'get all videoStreams',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all videoStreams',
                status:'success',
                data:videoStreams,
                dataType:'videoStreamArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var videoStreamId = req.params.videoStreamId;
    VideoStream.findById(videoStreamId, function(err, videoStream){
        if(err) {
            var response = {
                action:'get videoStreams '+videoStreamId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get videoStream '+videoStreamId,
                status:'success',
                data:videoStream,
                dataType:'videoStream',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var videoStreamIds = req.params.videoStreamIds;
    VideoStream.findByIds(videoStreamIds, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByUserId(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    VideoStream.findByUserIds(userIds, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    VideoStream.findById(userId, function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityZero(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityFirst(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximitySecond(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityThird(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    VideoStream.findById(userId, function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    VideoStream.findByProximityZero(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    VideoStream.findByProximityFirst(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    VideoStream.findByProximitySecond(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    VideoStream.findByProximityThird(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    VideoStream.findById(userId, function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityZero(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityFirst(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximitySecond(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityThird(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    VideoStream.findById(userId, function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityZero(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityFirst(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximitySecond(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    VideoStream.findByProximityThird(userId, function(err, videoStreams){
        if(err){
            
        }
        else if(!videoStreams){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var videoStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    videoStream = new VideoStream(videoStream);
    videoStream.create(function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var videoStreamId = req.params.videoStreamId;
    var videoStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    VideoStream.findOneAndUpdate(videoStreamId, videoStream, function(err, videoStream){
        if(err){
            
        }
        else if(!videoStream){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var videoStreamId = req.params.videoStreamId;
    VideoStream.remove(videoStreamId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

