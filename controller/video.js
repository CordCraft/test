var Video = require("../model/video");


exports.findAll = function(req, res){
    return Video.find({}, function(err, videos){
        if(err) {
            var response = {
                action:'get all videos',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all videos',
                status:'success',
                data:videos,
                dataType:'videoArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var videoId = req.params.videoId;
    Video.findById(videoId, function(err, video){
        if(err) {
            var response = {
                action:'get videos '+videoId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get video '+videoId,
                status:'success',
                data:video,
                dataType:'video',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var videoIds = req.params.videoIds;
    Video.findByIds(videoIds, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Video.findByUserId(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Video.findByUserIds(userIds, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Video.findById(userId, function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityZero(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityFirst(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Video.findByProximitySecond(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityThird(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Video.findById(userId, function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Video.findByProximityZero(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Video.findByProximityFirst(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Video.findByProximitySecond(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Video.findByProximityThird(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Video.findById(userId, function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityZero(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityFirst(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Video.findByProximitySecond(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityThird(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Video.findById(userId, function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityZero(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityFirst(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Video.findByProximitySecond(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Video.findByProximityThird(userId, function(err, videos){
        if(err){
            
        }
        else if(!videos){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var video = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    video = new Video(video);
    video.create(function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var videoId = req.params.videoId;
    var video = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Video.findOneAndUpdate(videoId, video, function(err, video){
        if(err){
            
        }
        else if(!video){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var videoId = req.params.videoId;
    Video.remove(videoId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

