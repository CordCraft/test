var express = require('express');
var videoApp = express();
var videoCtrl = require('../controller/video');

var auth = require('../auth');


videoApp.get('/', videoCtrl.findAll);


videoApp.get('/by/userId', videoCtrl.findByUserId);


videoApp.get('/by/userIds', videoCtrl.findByUserIds);


videoApp.get('/all/proximity', videoCtrl.findAllProximity);


videoApp.get('/all/proximity/zero', videoCtrl.findAllProximityZero);


videoApp.get('/all/proximity/first', videoCtrl.findAllProximityFirst);


videoApp.get('/all/proximity/second', videoCtrl.findAllProximitySecond);


videoApp.get('/all/proximity/third', videoCtrl.findAllProximityThird);


videoApp.get('/selected/proximity', videoCtrl.findSelectedProximity);


videoApp.get('/selected/proximity/zero', videoCtrl.findSelectedProximityZero);


videoApp.get('/selected/proximity/first', videoCtrl.findSelectedProximityFirst);


videoApp.get('/selected/proximity/second', videoCtrl.findSelectedProximitySecond);


videoApp.get('/selected/proximity/third', videoCtrl.findSelectedProximityThird);


videoApp.get('/my/proximity', videoCtrl.findMyProximity);


videoApp.get('/my/proximity/zero', videoCtrl.findMyProximityZero);


videoApp.get('/my/proximity/first', videoCtrl.findMyProximityFirst);


videoApp.get('/my/proximity/second', videoCtrl.findMyProximitySecond);


videoApp.get('/my/proximity/third', videoCtrl.findMyProximityThird);


videoApp.get('/by/:userId/proximity', videoCtrl.findByProximity);


videoApp.get('/by/:userId/proximity/zero', videoCtrl.findByProximityZero);


videoApp.get('/by/:userId/proximity/first', videoCtrl.findByProximityFirst);


videoApp.get('/by/:userId/proximity/second', videoCtrl.findByProximitySecond);


videoApp.get('/by/:userId/proximity/third', videoCtrl.findByProximityThird);


videoApp.get('/:videoId', videoCtrl.findById);


videoApp.post('/', videoCtrl.create);


videoApp.put('/:videoId', videoCtrl.update);


videoApp.delete('/:videoId', videoCtrl.delete);






module.exports = videoApp;

