/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Type = require('mongoose-easy-types').Types;

var profileSchema = mongoose.Schema({
    time: Type.date.future(),
    info: {
        firstName:Type.name.firstName(),
        lastName:Type.name.lastName()
    },
    media: {
        profileImage:Type.image.people(),
        coverImage:Type.image.nature()
    }
});

profileSchema.virtual("userId").get(function(){
    console.log("userId")
    return this._id;
});



profileSchema.statics.onAuthenticationCreationStarted = function(){
    
    
};


profileSchema.statics.onAuthenticationCreationCompleted = function(){
    //what to do on
};


var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').NoAuth;
profileSchema.plugin(FunctionCreatePlugin);
//profileSchema.plugin(AuthCreationListenerPlugin);
var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;