/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(modelNamespace){
    
    var response = null;
    var request = null;
    
    var Model = require("../model"+modelNamespace);
    var event = require("./piper-event")(modelNamespace);
    var emitter = event.emitter;
    
    var userId = "58f0e5db44be2b0e388c91d5";



    this.respond = function(event, response){
        emitter(event, response);
        this.response.status(response.code).json(response);
    };


    this.findAll = function(req, res){
        this.request = req;
        this.response = res;
        emitter(event.FIND_ALL, "");
        return Model.find({}).then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'failed',
                reason:err,
                code:500
            };
            this.respond(event.FIND_ALL_FAILED, response);
            return null;
        });
    };
    
    
    this.findAllByUserId = function(req, res){
        this.request = req;
        this.response = res;
        emitter(event.FIND_BY_ID, "");
        var query = Model.findByUserId(req.conditions);
        query.then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'failed',
                reason:err,
                code:500
            };
            this.respond(event.FIND_ALL_FAILED, response);
            return null;
        });
    };
    
    
    this.proximity0 = function(req, res){
        this.request = req;
        this.response = res;
        emitter(event.FIND_ALL, "");
        console.log(req.params.userId);
        return Model.proximity0(req.params)
            .then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'failed',
                reason:err,
                code:500
            };
            this.respond(event.FIND_ALL_FAILED, response);
        });
    };
    
    
    
    
    this.proximity1 = function(req, res){
        //var conditions = request.param;
        //this.pagination = req.param('pagination');
        this.request = req;
        this.response = res;
        emitter(event.FIND_ALL, "");
        return Model.proximity1(req.params)
            .then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
            console.log(err);
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'failed',
                reason:err,
                code:500
            };
            this.respond(event.FIND_ALL_FAILED, response);
        });
    };
    
    
    
    
    this.proximity2 = function(req, res){
        this.request = req;
        this.response = res;
        emitter(event.FIND_ALL, "");
        return Model.proximity2(req.params)
            .then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
                var response = {
                    action:'get all '+modelNamespace+'s',
                    status:'failed',
                    reason:err,
                    code:500
                };
                this.respond(event.FIND_ALL_FAILED, response);
                return null;
        });
    };
    
    
    
    
    this.proximity3 = function(req, res){
        this.request = req;
        this.response = res;
        emitter(event.FIND_ALL, "");
        return Model.proximity3(req.params)
        .then(function(models){
            var response = {
                action:'get all '+modelNamespace+'s',
                status:'success',
                data:models,
                dataType:modelNamespace+'s',
                code:200
            };
            this.respond(event.FIND_ALL_SUCCESS, response);
        }).catch(function(err){
                var response = {
                    action:'get all '+modelNamespace+'s',
                    status:'failed',
                    reason:err,
                    code:500
                };
                this.respond(event.FIND_ALL_FAILED, response);
                return null;
        });
    };
    
   
   
   
    this.findById = function(req, res){
        emitter(event.FIND_BY_ID, "");
        var query = Model.findById(req.conditions);
        query.then(function(model){
            var response = {
                action:'get '+modelNamespace+' '+req.conditions.modelId,
                status:'success',
                data:model,
                dataType:modelNamespace,
                code:200
            };
            emitter(event.FIND_BY_ID, "");
            res.status(200).json(response);
        }).catch(function(err){
            var response = {
                action:'get '+modelNamespace+' '+req.conditions.modelId,
                status:'failed',
                reason:err,
                code:500
            };
            emitter(event.FIND_BY_ID, "");
            res.status(500).json(response);
            return null;
        });
    };



    this.findByIds = function(req, res){
        var modelIds = req.params.modelIds;
        Model.findByIds(modelIds, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };
    
    

    this.findByUserId = function(req, res){
        var userId = req.params.userId;
        Model.findByUserId(userId, function(err, models){
            if(err){


            }
            else if(!models){


            }
            else{
                
                
            }
        });
    };
    
    

    this.findByUserIds = function(req, res){
        var userIds = req.params.userIds;
        Model.findByUserIds(userIds, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };
    


    this.findByProximity = function(req, res){
        var userId = req.params.userId;
        Model.findById(userId, function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };


    this.findByProximityZero = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityZero(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findByProximityFirst = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityFirst(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findByProximitySecond = function(req, res){
        var userId = req.params.userId;
        Model.findByProximitySecond(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findByProximityThird = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityThird(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };


    this.findMyProximity = function(req, res){
        var userId = req.user._id;
        Model.findById(userId, function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };

    this.findMyProximityZero = function(req, res){
        var userId = req.user._id;
        Model.findByProximityZero(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findMyProximityFirst = function(req, res){
        var userId = req.user._id;
        Model.findByProximityFirst(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findMyProximitySecond = function(req, res){
        var userId = req.user._id;
        Model.findByProximitySecond(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findMyProximityThird = function(req, res){
        var userId = req.user._id;
        Model.findByProximityThird(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };


    this.findSelectedProximity = function(req, res){
        var userId = req.params.userId;
        Model.findById(userId, function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };

    this.findSelectedProximityZero = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityZero(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findSelectedProximityFirst = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityFirst(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findSelectedProximitySecond = function(req, res){
        var userId = req.params.userId;
        Model.findByProximitySecond(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findSelectedProximityThird = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityThird(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };



    this.findAllProximity = function(req, res){
        var userId = req.params.userId;
        Model.findById(userId, function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };

    this.findAllProximityZero = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityZero(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findAllProximityFirst = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityFirst(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findAllProximitySecond = function(req, res){
        var userId = req.params.userId;
        Model.findByProximitySecond(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };

    this.findAllProximityThird = function(req, res){
        var userId = req.params.userId;
        Model.findByProximityThird(userId, function(err, models){
            if(err){

            }
            else if(!models){

            }
            else{

            }
        });
    };


    this.create = function(req, res){
        var model = req.body;
        model.userId = req.user._id;
        model = new Model(model);
        model.create(function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };


    this.update = function(req, res){
        var modelId = req.params.modelId;
        var model = {
            userId:req.user._id,
            length:req.body.length,
            src:req.body.src,
            coverImage:req.body.coverImage,
            description:req.body.description,
            title:req.body.title,
            accessType:req.body.title
        };
        Model.findOneAndUpdate(modelId, model, function(err, model){
            if(err){

            }
            else if(!model){

            }
            else{

            }
        });
    };


    this.delete = function(req, res){
        var modelId = req.params.modelId;
        Model.remove(modelId, function(err, response){
            if(err){

            }
            else{

            }
        });
    };



    play = function(req, res){

        return null;
    };


    pause = function(req, res){
        return null;
    };


    stop = function(req, res){
        return null;
    };


    resumeAt = function(req, res){
        return null;
    };
    return this;
}

