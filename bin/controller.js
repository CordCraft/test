/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(modelNamespace){
    
    var response = null;
    var request = null;
    
    var Model = require("../model"+modelNamespace);
    
    
    function composeResponse(value, modelNamespace, func, code){
        return {
            action:func+' '+modelNamespace,
            status:code === 200? "success Monday":"error",
            value:value,
            model:modelNamespace,
            code:code
        };
    }


    this.respond = function(response){
        this.response.status(response.code).json(response);
    };


    this.findAll = function(req, res){
        this.request = req;
        this.response = res;
        return Model.find({}).then(function(models){
            var response = composeResponse(models, modelNamespace, "get all", 200);
            this.respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "get all", 500);
            this.respond(response);
            return null;
        });
    };
    
    
    this.findAllByUserId = function(req, res){
        this.request = req;
        this.response = res;
        var query = Model.findByUserId(req.conditions);
        query.then(function(models){
            var response = composeResponse(models, modelNamespace, "get all by userId", 200);
            this.respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "get all by userId", 500);
            this.respond(response);
            return null;
        });
    };
    
    this.findByUserId = function(req, res){
        
    }
    
    
    this.proximity0 = function(req, res){
        this.request = req;
        this.response = res;
        return Model.proximity0(req.conditions)
            .then(function(models){
            var response = composeResponse(models, modelNamespace, "get proximity 0", 200);
            this.respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "get proximity 0", 500);
            this.respond(response);
        });
    };
    
    
    
    
    this.proximity1 = function(req, res){
        //var conditions = request.param;
        //this.pagination = req.param('pagination');
        this.request = req;
        this.response = res;
        return Model.proximity1(req.conditions)
            .then(function(models){
            var response = composeResponse(models, modelNamespace, "get proximity 1", 200);
            this.respond(response);
        }).catch(function(err){
            console.log(err);
            var response = composeResponse(err, modelNamespace, "get proximity 1", 500);
            this.respond(response);
        });
    };
    
    
    
    
    this.proximity2 = function(req, res){
        this.request = req;
        this.response = res;
        return Model.proximity2(req.conditions)
            .then(function(models){
            var response = composeResponse(models, modelNamespace, "get proximity 2", 200);
            this.respond(response);
        }).catch(function(err){
                var response = composeResponse(err, modelNamespace, "get proximity 2", 500);
                this.respond(response);
                return null;
        });
    };
    
    
    
    
    this.proximity3 = function(req, res){
        this.request = req;
        this.response = res;
        return Model.proximity3(req.conditions)
        .then(function(models){
            var response = composeResponse(models, modelNamespace, "get proximity 3", 200);
            this.respond(response);
        }).catch(function(err){
                var response = composeResponse(err, modelNamespace, "get proximity 3", 500);
                this.respond(response);
                return null;
        });
    };
    
   
   
   
    this.findById = function(req, res){
        this.request = req;
        this.response = res;
        var query = Model.findById(req.conditions);
        query.then(function(model){
            var response = composeResponse(model, modelNamespace, "get one by id", 200);
            res.status(200).json(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "get one by id", 500);
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


    this.create = function(req, res){
        this.request = req;
        this.response = res;
        var model = new Model(req.body);
        model.create().then(function(model){
            var response = composeResponse(model, modelNamespace, "create", 200);
            respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "create", 500);
            respond(response);
        });
    };


    this.update = function(req, res){
        var newModel = req.body;
        this.request = req;
        this.response = res;
        Model.findByIdAndUpdate(newModel._id, newModel).then(function(oldModel){
            model = {old_val:oldModel, new_val:newModel};
            var response = composeResponse(model, modelNamespace, "update", 200);
            respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "update", 500);
            respond(response);
        });
    };


    this.delete = function(req, res){
        var modelId = req.params.modelId;
        this.request = req;
        this.response = res;
        Model.remove(modelId).then(function(model){
            var response = composeResponse(model, modelNamespace, "delete", 200);
            respond(response);
        }).catch(function(err){
            var response = composeResponse(err, modelNamespace, "delete", 500);
            respond(response);
        });
    };
    
    return this;

};


