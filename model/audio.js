/*
 * 
 * 
 */

var mongoose = require("mongoose");
var Type = require("mongoose-easy-types").Types;



var audioSchema = mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    length:Type.random.number(),
    src:Type.internet.url(),
    coverImage:Type.image.abstract(),
    description:Type.lorem.sentences({asArray:false}),
    title:Type.lorem.words({asArray:false}),
    accessType:String
});

var Audio = mongoose.model("Audio", audioSchema);


module.exports = Audio;