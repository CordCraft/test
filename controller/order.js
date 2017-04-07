/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Order = require("../model/order");


exports.findAll = function(req, res){
    return Order.find({}, function(err, orders){
        if(err) {
            var response = {
                action:'get all orders',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all orders',
                status:'success',
                data:orders,
                dataType:'orderArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var orderId = req.params.orderId;
    Order.findById(orderId, function(err, order){
        if(err) {
            var response = {
                action:'get orders '+orderId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get order '+orderId,
                status:'success',
                data:order,
                dataType:'order',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var orderIds = req.params.orderIds;
    Order.findByIds(orderIds, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Order.findByUserId(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Order.findByUserIds(userIds, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Order.findById(userId, function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityZero(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityFirst(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Order.findByProximitySecond(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityThird(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Order.findById(userId, function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Order.findByProximityZero(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Order.findByProximityFirst(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Order.findByProximitySecond(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Order.findByProximityThird(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Order.findById(userId, function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityZero(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityFirst(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Order.findByProximitySecond(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityThird(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Order.findById(userId, function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityZero(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityFirst(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Order.findByProximitySecond(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Order.findByProximityThird(userId, function(err, orders){
        if(err){
            
        }
        else if(!orders){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var order = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    order = new Order(order);
    order.create(function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var orderId = req.params.orderId;
    var order = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Order.findOneAndUpdate(orderId, order, function(err, order){
        if(err){
            
        }
        else if(!order){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var orderId = req.params.orderId;
    Order.remove(orderId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

