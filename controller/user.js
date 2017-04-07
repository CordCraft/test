var User = require("../model/user");


exports.findAll = function(req, res){
    return User.find({}, function(err, users){
        if(err) {
            var response = {
                action:'get all users',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all users',
                status:'success',
                data:users,
                dataType:'userArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err) {
            var response = {
                action:'get users '+userId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get user '+userId,
                status:'success',
                data:user,
                dataType:'user',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var userIds = req.params.userIds;
    User.findByIds(userIds, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    User.findByUserId(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    User.findByUserIds(userIds, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var user = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    user = new User(user);
    user.create(function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var userId = req.params.userId;
    var user = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    User.findOneAndUpdate(userId, user, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var userId = req.params.userId;
    User.remove(userId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

