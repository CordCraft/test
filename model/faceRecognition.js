/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require('mongoose');


var faceRecognitionSchema = mongoose.Schema({
    eye:String,
    nose:String,
    mouth:String
});


var FaceRecognition = mongoose.model("FaceRecognition", faceRecognitionSchema);




module.exports = FaceRecognition;

