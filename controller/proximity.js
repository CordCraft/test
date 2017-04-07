var Proximity = require("../model/proximity");


exports.findAll = function(req, res){
    return Proximity.find({}, function(err, proximitys){
        if(err) {
            var response = {
                action:'get all proximitys',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all proximitys',
                status:'success',
                data:proximitys,
                dataType:'proximityArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var proximityId = req.params.proximityId;
    Proximity.findById(proximityId, function(err, proximity){
        if(err) {
            var response = {
                action:'get proximitys '+proximityId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get proximity '+proximityId,
                status:'success',
                data:proximity,
                dataType:'proximity',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var proximityIds = req.params.proximityIds;
    Proximity.findByIds(proximityIds, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Proximity.findByUserId(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Proximity.findByUserIds(userIds, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Proximity.findById(userId, function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityZero(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityFirst(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximitySecond(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityThird(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Proximity.findById(userId, function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Proximity.findByProximityZero(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Proximity.findByProximityFirst(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Proximity.findByProximitySecond(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Proximity.findByProximityThird(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Proximity.findById(userId, function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityZero(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityFirst(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximitySecond(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityThird(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Proximity.findById(userId, function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityZero(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityFirst(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximitySecond(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Proximity.findByProximityThird(userId, function(err, proximitys){
        if(err){
            
        }
        else if(!proximitys){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var proximity = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    proximity = new Proximity(proximity);
    proximity.create(function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var proximityId = req.params.proximityId;
    var proximity = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Proximity.findOneAndUpdate(proximityId, proximity, function(err, proximity){
        if(err){
            
        }
        else if(!proximity){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var proximityId = req.params.proximityId;
    Proximity.remove(proximityId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

