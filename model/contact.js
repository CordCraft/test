/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');
var Type = require("mongoose-easy-types").Types;

var contactSchema = mongoose.Schema({
    address:{
        street:String,
        city:String,
        country:String,
        code:String
    },
    countryCode:String,
    mobile:String,
    email:String,
    website:String
});


var Contact = mongoose.model("Contact", contactSchema);


module.exports = Contact;