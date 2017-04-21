/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');


var appSchema = mongoose.Schema({
    userId:{ref:"Profile", type:mongoose.Schema.Types.ObjectId},
    appName:String,
    appId:String,
    appKey:String,
    appSecret:String,
    accessType:String
});



var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').AppAuth;
appSchema.plugin(FunctionCreatePlugin);


var App = mongoose.model('App', appSchema);
module.exports = App;
