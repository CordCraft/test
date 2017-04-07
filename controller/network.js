/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Network = require("../model/network");


exports.findAll = function(req, res){
    return Network.find({}, function(err, networks){
        if(err) {
            var response = {
                action:'get all networks',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all networks',
                status:'success',
                data:networks,
                dataType:'networkArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var networkId = req.params.networkId;
    Network.findById(networkId, function(err, network){
        if(err) {
            var response = {
                action:'get networks '+networkId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get network '+networkId,
                status:'success',
                data:network,
                dataType:'network',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var networkIds = req.params.networkIds;
    Network.findByIds(networkIds, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Network.findByUserId(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Network.findByUserIds(userIds, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Network.findById(userId, function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityZero(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityFirst(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Network.findByProximitySecond(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityThird(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Network.findById(userId, function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Network.findByProximityZero(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Network.findByProximityFirst(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Network.findByProximitySecond(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Network.findByProximityThird(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Network.findById(userId, function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityZero(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityFirst(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Network.findByProximitySecond(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityThird(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Network.findById(userId, function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityZero(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityFirst(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Network.findByProximitySecond(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Network.findByProximityThird(userId, function(err, networks){
        if(err){
            
        }
        else if(!networks){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var network = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    network = new Network(network);
    network.create(function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var networkId = req.params.networkId;
    var network = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Network.findOneAndUpdate(networkId, network, function(err, network){
        if(err){
            
        }
        else if(!network){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var networkId = req.params.networkId;
    Network.remove(networkId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};





