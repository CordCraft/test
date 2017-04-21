/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Interest = require("./interest");
var Order = require("./order");
var Profile = require("./profile");
var Search = require("./search");

var userSchema = mongoose.Schema({
    auth:{ref:"Authenitication", type:mongoose.Schema.Types.ObjectId},
    userId: { type: mongoose.Schema.Types.ObjectId, es_indexed:true},
    
    error:[{ref: "Error", type: mongoose.Schema.Types.ObjectId}],
    
    interest: [{
        ref: "Interest", type: mongoose.Schema.Types.ObjectId,
        es_schema: Interest, es_indexed:true
    }],
    log: [{ref: "Log", type: mongoose.Schema.Types.ObjectId}],
    notification: [{ref: "Notification", type: mongoose.Schema.Types.ObjectId}],
    order: [{
        ref: "Order", type: mongoose.Schema.Types.ObjectId,
        es_schema: Order, es_indexed:true
    }],
    profile:{
        ref: "Profile", type: mongoose.Schema.Types.ObjectId,
        es_schema: Profile, es_indexed:true
    },
    
    search: [{
        ref: "Search", type: mongoose.Schema.Types.ObjectId,
        es_schema: Search, es_indexed:true
    }]
});


userSchema.methods.create = function(conditions){
    var profile = {
        info:{
            firstName:conditions.firstName,
            lastName:conditions.lastName
        }
    };
    profile = new Profile(profile);
    profile.create().then(function(profile){
       this.userId = profile._id;
       new Device({userId:this.userId })
    });
};

var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').NoAuth;
userSchema.plugin(FunctionCreatePlugin);
var User = mongoose.model("User", userSchema);




module.exports = User;