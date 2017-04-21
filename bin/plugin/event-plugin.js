/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var events = require("events");
var emitter = new events.EventEmitter();


exports.EmitterPlugin = function(schema, plugin){

    schema.pre("create", true, this.creationStarted);
    schema.post("create", true, this.creationCompleted);
    schema.pre("update", true, this.updateStarted);
    schema.post("update", true, this.updateCompleted);
    schema.pre("remove"), true, this.removeStarted;
    schema.post("remove", true, this.removeCompleted);


    schema.statics.creationStarted = function(next, done){
        emitter.emit(this.modelName.toLowerCase()+"/creation/started", this, next, done);
    };

    schema.statics.creationCompleted = function(doc, next, done){
        emitter.emit(this.modelName.toLowerCase()+"/creation/completed", doc, next, done);
        next();
    };
    schema.statics.updateStarted = function(next, done){
        emitter.emit(this.modelName.toLowerCase()+"/update/started", this, next, done);
        next();
    };

    schema.statics.updateCompleted = function(doc, next, done){
        emitter.emit(this.modelName.toLowerCase()+"/update/completed", doc, next, done);
        next();
    };
    schema.statics.removeStarted = function(next, done){
        emitter.emit(this.modelName.toLowerCase()+"/remove/started", this, next, done);
        next();
    };

    schema.statics.removeCompleted = function(doc, next, done){
        emitter.emit(this.modelName.toLowerCase()+"/remove/completed", doc, next, done);
        next();
    };


};

exports.ListenerPlugin = function(model){
    
    var Authentication = function(schema, option){
        emitter.on("authentication/creation/started", this.onAuthenticationCreationStarted);
        emitter.on("authentication/creation/completed", this.onAuthenticationCreationCompleted);
        emitter.on("authentication/update/started", this.onAuthenticationUpdateStarted);
        emitter.on("authentication/updated/completed", this.onAuthenticationUpdateCompleted);
        emitter.on("authentication/remove/started", this.onAuthenticationRemoveStarted);
        emitter.on("authentication/remove/completed", this.onAuthenticationRemoveCompleted);
        
    };
    
    
    var Device = function(schema, option){
        emitter.on("device/creation/started", this.onDeviceCreationStarted);
        emitter.on("device/creation/completed", this.onDeviceCreationCompleted);
        emitter.on("device/update/started", this.onDeviceUpdateStarted);
        emitter.on("device/updated/completed", this.onDeviceUpdateCompleted);
        emitter.on("device/remove/started", this.onDeviceRemoveStarted);
        emitter.on("device/remove/completed", this.onDeviceRemoveCompleted);
        
    };
    
    
    
    var Profile = function(schema, option){
        emitter.on("profile/creation/started", this.onProfileCreationStarted);
        emitter.on("profile/creation/completed", this.onProfileCreationCompleted);
        emitter.on("profile/update/started", this.onProfileUpdateStarted);
        emitter.on("profile/updated/completed", this.onProfileUpdateCompleted);
        emitter.on("profile/remove/started", this.onProfileRemoveStarted);
        emitter.on("profile/remove/completed", this.onProfileRemoveCompleted);
        
    };
    
    
    
    var User = function(schema, option){
        emitter.on("user/creation/started", this.onUserCreationStarted);
        emitter.on("user/creation/completed", this.onUserCreationCompleted);
        emitter.on("user/update/started", this.onUserUpdateStarted);
        emitter.on("user/updated/completed", this.onUserUpdateCompleted);
        emitter.on("user/remove/started", this.onUserRemoveStarted);
        emitter.on("user/remove/completed", this.onUserRemoveCompleted);
        
    };
    
    
    
    
};