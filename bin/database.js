/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var ElasticPlugin = require("mongoosastic");
var ProximityPlugin = require('./plugin/proximity-plugin');
var FakerPlugin = require('mongoose-easy-types').Plugin;
var PaginationPlugin = require('mongoose-paginate');
//var LogPlugin = require('./plugin/log-plugin');
//var NotificationPlugin = require('./plugin/notification-plugin');

mongoose.plugin(FakerPlugin);
mongoose.plugin(ProximityPlugin);
mongoose.plugin(ElasticPlugin);
mongoose.plugin(PaginationPlugin);
//mongoose.plugin(LogPlugin);
//mongoose.plugin(NotificationPlugin);



exports.connect = function(database){
    mongoose.connect(database);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(err, response){
        console.log("connection to mongoose successful!");
    });
};





