/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var videoStreamApp = express();
var videoStreamCtrl = require('../controller/videoStream');

var auth = require('../auth');


videoStreamApp.get('/', videoStreamCtrl.findAll);


videoStreamApp.get('/by/userId', videoStreamCtrl.findByUserId);


videoStreamApp.get('/by/userIds', videoStreamCtrl.findByUserIds);


videoStreamApp.get('/all/proximity', videoStreamCtrl.findAllProximity);


videoStreamApp.get('/all/proximity/zero', videoStreamCtrl.findAllProximityZero);


videoStreamApp.get('/all/proximity/first', videoStreamCtrl.findAllProximityFirst);


videoStreamApp.get('/all/proximity/second', videoStreamCtrl.findAllProximitySecond);


videoStreamApp.get('/all/proximity/third', videoStreamCtrl.findAllProximityThird);


videoStreamApp.get('/selected/proximity', videoStreamCtrl.findSelectedProximity);


videoStreamApp.get('/selected/proximity/zero', videoStreamCtrl.findSelectedProximityZero);


videoStreamApp.get('/selected/proximity/first', videoStreamCtrl.findSelectedProximityFirst);


videoStreamApp.get('/selected/proximity/second', videoStreamCtrl.findSelectedProximitySecond);


videoStreamApp.get('/selected/proximity/third', videoStreamCtrl.findSelectedProximityThird);


videoStreamApp.get('/my/proximity', videoStreamCtrl.findMyProximity);


videoStreamApp.get('/my/proximity/zero', videoStreamCtrl.findMyProximityZero);


videoStreamApp.get('/my/proximity/first', videoStreamCtrl.findMyProximityFirst);


videoStreamApp.get('/my/proximity/second', videoStreamCtrl.findMyProximitySecond);


videoStreamApp.get('/my/proximity/third', videoStreamCtrl.findMyProximityThird);


videoStreamApp.get('/by/:userId/proximity', videoStreamCtrl.findByProximity);


videoStreamApp.get('/by/:userId/proximity/zero', videoStreamCtrl.findByProximityZero);


videoStreamApp.get('/by/:userId/proximity/first', videoStreamCtrl.findByProximityFirst);


videoStreamApp.get('/by/:userId/proximity/second', videoStreamCtrl.findByProximitySecond);


videoStreamApp.get('/by/:userId/proximity/third', videoStreamCtrl.findByProximityThird);


videoStreamApp.get('/:videoStreamId', videoStreamCtrl.findById);


videoStreamApp.post('/', videoStreamCtrl.create);


videoStreamApp.put('/:videoStreamId', videoStreamCtrl.update);


videoStreamApp.delete('/:videoStreamId', videoStreamCtrl.delete);






module.exports = videoStreamApp;

