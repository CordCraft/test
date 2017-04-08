/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var express = require('express');
var api = express();



var audio = require('./api/audio');
var basic = require('./api/basic');
var call = require('./api/call');
var chat = require('./api/chat');
var developer = require('./api/developer');
var device = require('./api/device');
var education = require('./api/education');
var employment = require('./api/employment');
var error = require('./api/error');
var flowAnalysis = require('./api/flowAnalysis');
var geoSuccess = require('./api/geoSuccess');
var image = require('./api/image');
var interest = require('./api/interest');
var linearSuccess = require('./api/linearSuccess');
var log = require('./api/log');
var network = require('./api/network');
var notification = require('./api/notification');
var order = require('./api/order');
var profile = require('./api/profile');
var proximity = require('./api/proximity');
var quote = require('./api/quote');
var search = require('./api/search');
var skill = require('./api/skill');
var user = require('./api/user');
var video = require('./api/video');



api.use('/audios', audio);
api.use('/basics', basic);
api.use('/calls', call);
api.use('/chats', chat);
api.use('/developers', developer);
api.use('/devices', device);
api.use('/educations', education);
api.use('/employments', employment);
api.use('/errors', error);
api.use('/flowAnalysis', flowAnalysis);
api.use('/geoSuccesses', geoSuccess);
api.use('/images', image);
api.use('/interests', interest);
api.use('/linearSuccesses', linearSuccess);
api.use('/logs', log);
api.use('/networks', network);
api.use('/notifications', notification);
api.use('/orders', order);
api.use('/profiles', profile);
api.use('/proximities', proximity);
api.use('/quotes', quote);
api.use('/searches', search);
api.use('/skills', skill);
api.use('/users', user);
api.use('/videos', video);


api.all('/', function(req, res){
    res.json({
        status:"success"
    });
});

module.exports = api;








