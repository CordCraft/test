/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");


var orderSchema = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:"Profile"},
    product: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    status:String 
});


var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').NoAuth;
orderSchema.plugin(FunctionCreatePlugin);
var Order = mongoose.model("Order", orderSchema);

module.exports = Order;