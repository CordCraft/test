/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Type = require("mongoose-easy-types");



var productSchema = new mongoose.Schema({
    name: {type:String, unique:true},
    isbn: {type:String, unique:true},
    image: String,
    price: Number,
    currency: String,
    reviews:[{
        
    }]
});


var Product = mongoose.model("Product", productSchema);


module.exports = Product;



