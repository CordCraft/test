/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Notification = require("../model/notification");


exports.findAll = function(req, res){
    return Notification.find({}, function(err, notifications){
        if(err) {
            var response = {
                action:'get all notifications',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all notifications',
                status:'success',
                data:notifications,
                dataType:'notificationArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var notificationId = req.params.notificationId;
    Notification.findById(notificationId, function(err, notification){
        if(err) {
            var response = {
                action:'get notifications '+notificationId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get notification '+notificationId,
                status:'success',
                data:notification,
                dataType:'notification',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var notificationIds = req.params.notificationIds;
    Notification.findByIds(notificationIds, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Notification.findByUserId(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Notification.findByUserIds(userIds, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Notification.findById(userId, function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityZero(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityFirst(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximitySecond(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityThird(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Notification.findById(userId, function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Notification.findByProximityZero(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Notification.findByProximityFirst(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Notification.findByProximitySecond(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Notification.findByProximityThird(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Notification.findById(userId, function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityZero(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityFirst(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximitySecond(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityThird(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Notification.findById(userId, function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityZero(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityFirst(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximitySecond(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Notification.findByProximityThird(userId, function(err, notifications){
        if(err){
            
        }
        else if(!notifications){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var notification = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    notification = new Notification(notification);
    notification.create(function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var notificationId = req.params.notificationId;
    var notification = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Notification.findOneAndUpdate(notificationId, notification, function(err, notification){
        if(err){
            
        }
        else if(!notification){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var notificationId = req.params.notificationId;
    Notification.remove(notificationId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

