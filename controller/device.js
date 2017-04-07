/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Device = require("../model/device");


exports.findAll = function(req, res){
    return Device.find({}, function(err, devices){
        if(err) {
            var response = {
                action:'get all devices',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all devices',
                status:'success',
                data:devices,
                dataType:'deviceArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var deviceId = req.params.deviceId;
    Device.findById(deviceId, function(err, device){
        if(err) {
            var response = {
                action:'get devices '+deviceId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get device '+deviceId,
                status:'success',
                data:device,
                dataType:'device',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var deviceIds = req.params.deviceIds;
    Device.findByIds(deviceIds, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Device.findByUserId(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Device.findByUserIds(userIds, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Device.findById(userId, function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityZero(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityFirst(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Device.findByProximitySecond(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityThird(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Device.findById(userId, function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Device.findByProximityZero(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Device.findByProximityFirst(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Device.findByProximitySecond(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Device.findByProximityThird(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Device.findById(userId, function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityZero(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityFirst(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Device.findByProximitySecond(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityThird(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Device.findById(userId, function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityZero(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityFirst(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Device.findByProximitySecond(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Device.findByProximityThird(userId, function(err, devices){
        if(err){
            
        }
        else if(!devices){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var device = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    device = new Device(device);
    device.create(function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var deviceId = req.params.deviceId;
    var device = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Device.findOneAndUpdate(deviceId, device, function(err, device){
        if(err){
            
        }
        else if(!device){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var deviceId = req.params.deviceId;
    Device.remove(deviceId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

