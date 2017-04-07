/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var logApp = express();
var logCtrl = require('../controller/log');

var auth = require('../auth');


logApp.get('/', logCtrl.findAll);


logApp.get('/by/userId', logCtrl.findByUserId);


logApp.get('/by/userIds', logCtrl.findByUserIds);


logApp.get('/all/proximity', logCtrl.findAllProximity);


logApp.get('/all/proximity/zero', logCtrl.findAllProximityZero);


logApp.get('/all/proximity/first', logCtrl.findAllProximityFirst);


logApp.get('/all/proximity/second', logCtrl.findAllProximitySecond);


logApp.get('/all/proximity/third', logCtrl.findAllProximityThird);


logApp.get('/selected/proximity', logCtrl.findSelectedProximity);


logApp.get('/selected/proximity/zero', logCtrl.findSelectedProximityZero);


logApp.get('/selected/proximity/first', logCtrl.findSelectedProximityFirst);


logApp.get('/selected/proximity/second', logCtrl.findSelectedProximitySecond);


logApp.get('/selected/proximity/third', logCtrl.findSelectedProximityThird);


logApp.get('/my/proximity', logCtrl.findMyProximity);


logApp.get('/my/proximity/zero', logCtrl.findMyProximityZero);


logApp.get('/my/proximity/first', logCtrl.findMyProximityFirst);


logApp.get('/my/proximity/second', logCtrl.findMyProximitySecond);


logApp.get('/my/proximity/third', logCtrl.findMyProximityThird);


logApp.get('/by/:userId/proximity', logCtrl.findByProximity);


logApp.get('/by/:userId/proximity/zero', logCtrl.findByProximityZero);


logApp.get('/by/:userId/proximity/first', logCtrl.findByProximityFirst);


logApp.get('/by/:userId/proximity/second', logCtrl.findByProximitySecond);


logApp.get('/by/:userId/proximity/third', logCtrl.findByProximityThird);


logApp.get('/:logId', logCtrl.findById);


logApp.post('/', logCtrl.create);


logApp.put('/:logId', logCtrl.update);


logApp.delete('/:logId', logCtrl.delete);






module.exports = logApp;

