/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var deviceApp = express();
var deviceCtrl = require('../controller/device');

var auth = require('../auth');


deviceApp.get('/', deviceCtrl.findAll);


deviceApp.get('/by/userId', deviceCtrl.findByUserId);


deviceApp.get('/by/userIds', deviceCtrl.findByUserIds);


deviceApp.get('/all/proximity', deviceCtrl.findAllProximity);


deviceApp.get('/all/proximity/zero', deviceCtrl.findAllProximityZero);


deviceApp.get('/all/proximity/first', deviceCtrl.findAllProximityFirst);


deviceApp.get('/all/proximity/second', deviceCtrl.findAllProximitySecond);


deviceApp.get('/all/proximity/third', deviceCtrl.findAllProximityThird);


deviceApp.get('/selected/proximity', deviceCtrl.findSelectedProximity);


deviceApp.get('/selected/proximity/zero', deviceCtrl.findSelectedProximityZero);


deviceApp.get('/selected/proximity/first', deviceCtrl.findSelectedProximityFirst);


deviceApp.get('/selected/proximity/second', deviceCtrl.findSelectedProximitySecond);


deviceApp.get('/selected/proximity/third', deviceCtrl.findSelectedProximityThird);


deviceApp.get('/my/proximity', deviceCtrl.findMyProximity);


deviceApp.get('/my/proximity/zero', deviceCtrl.findMyProximityZero);


deviceApp.get('/my/proximity/first', deviceCtrl.findMyProximityFirst);


deviceApp.get('/my/proximity/second', deviceCtrl.findMyProximitySecond);


deviceApp.get('/my/proximity/third', deviceCtrl.findMyProximityThird);


deviceApp.get('/by/:userId/proximity', deviceCtrl.findByProximity);


deviceApp.get('/by/:userId/proximity/zero', deviceCtrl.findByProximityZero);


deviceApp.get('/by/:userId/proximity/first', deviceCtrl.findByProximityFirst);


deviceApp.get('/by/:userId/proximity/second', deviceCtrl.findByProximitySecond);


deviceApp.get('/by/:userId/proximity/third', deviceCtrl.findByProximityThird);


deviceApp.get('/:deviceId', deviceCtrl.findById);


deviceApp.post('/', deviceCtrl.create);


deviceApp.put('/:deviceId', deviceCtrl.update);


deviceApp.delete('/:deviceId', deviceCtrl.delete);






module.exports = deviceApp;

