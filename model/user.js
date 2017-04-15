/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    audio: [{ref: "Audio", type: mongoose.Schema.Types.ObjectId}],
    audioGreet: [{ref: "AudioGreet", type: mongoose.Schema.Types.ObjectId}],
    basic: [{ref: "Basic", type: mongoose.Schema.Types.ObjectId}],
    call: [{ref: "Call", type: mongoose.Schema.Types.ObjectId}],
    chat: [{ref: "Chat", type: mongoose.Schema.Types.ObjectId}],
    developer: [{ref: "Developer", type: mongoose.Schema.Types.ObjectId}],
    device: [{ref: "Device", type: mongoose.Schema.Types.ObjectId}],
    eduction: [{ref: "Education", type: mongoose.Schema.Types.ObjectId}],
    employment:[{ref: "Employment", type: mongoose.Schema.Types.ObjectId}],
    error:[{ref: "Error", type: mongoose.Schema.Types.ObjectId}],
    faceRecognition: [{ref: "FaceRecognition", type: mongoose.Schema.Types.ObjectId}],
    flowAnalysis: [{ref: "FlowAnalysis", type: mongoose.Schema.Types.ObjectId}],
    geoSuccess: [{ref: "GeoSuccess", type: mongoose.Schema.Types.ObjectId}],
    image: [{ref: "Image", type: mongoose.Schema.Types.ObjectId}],
    interest: [{ref: "Interest", type: mongoose.Schema.Types.ObjectId}],
    linearSuccess: [{ref: "LinearSuccess", type: mongoose.Schema.Types.ObjectId}],
    log: [{ref: "Log", type: mongoose.Schema.Types.ObjectId}],
    notification: [{ref: "Notification", type: mongoose.Schema.Types.ObjectId}],
    order: [{ref: "Order", type: mongoose.Schema.Types.ObjectId}],
    profile:{ref: "Profile", type: mongoose.Schema.Types.ObjectId},
    stream: [{ref: "Stream", type: mongoose.Schema.Types.ObjectId}],
    quote: [{ref: "Quote", type: mongoose.Schema.Types.ObjectId}],
    search: [{ref: "Search", type: mongoose.Schema.Types.ObjectId}],
    snapStory: [{ref: "SnapStory", type: mongoose.Schema.Types.ObjectId}],
    skill: [{ref: "Skill", type: mongoose.Schema.Types.ObjectId}],
    video: [{ref: "Video", type: mongoose.Schema.Types.ObjectId}]
});
