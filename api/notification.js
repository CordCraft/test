/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var notificationApp = express();
var notificationCtrl = require('../controller/notification');

var auth = require('../auth');


notificationApp.get('/', notificationCtrl.findAll);


notificationApp.get('/by/userId', notificationCtrl.findByUserId);


notificationApp.get('/by/userIds', notificationCtrl.findByUserIds);


notificationApp.get('/all/proximity', notificationCtrl.findAllProximity);


notificationApp.get('/all/proximity/zero', notificationCtrl.findAllProximityZero);


notificationApp.get('/all/proximity/first', notificationCtrl.findAllProximityFirst);


notificationApp.get('/all/proximity/second', notificationCtrl.findAllProximitySecond);


notificationApp.get('/all/proximity/third', notificationCtrl.findAllProximityThird);


notificationApp.get('/selected/proximity', notificationCtrl.findSelectedProximity);


notificationApp.get('/selected/proximity/zero', notificationCtrl.findSelectedProximityZero);


notificationApp.get('/selected/proximity/first', notificationCtrl.findSelectedProximityFirst);


notificationApp.get('/selected/proximity/second', notificationCtrl.findSelectedProximitySecond);


notificationApp.get('/selected/proximity/third', notificationCtrl.findSelectedProximityThird);


notificationApp.get('/my/proximity', notificationCtrl.findMyProximity);


notificationApp.get('/my/proximity/zero', notificationCtrl.findMyProximityZero);


notificationApp.get('/my/proximity/first', notificationCtrl.findMyProximityFirst);


notificationApp.get('/my/proximity/second', notificationCtrl.findMyProximitySecond);


notificationApp.get('/my/proximity/third', notificationCtrl.findMyProximityThird);


notificationApp.get('/by/:userId/proximity', notificationCtrl.findByProximity);


notificationApp.get('/by/:userId/proximity/zero', notificationCtrl.findByProximityZero);


notificationApp.get('/by/:userId/proximity/first', notificationCtrl.findByProximityFirst);


notificationApp.get('/by/:userId/proximity/second', notificationCtrl.findByProximitySecond);


notificationApp.get('/by/:userId/proximity/third', notificationCtrl.findByProximityThird);


notificationApp.get('/:notificationId', notificationCtrl.findById);


notificationApp.post('/', notificationCtrl.create);


notificationApp.put('/:notificationId', notificationCtrl.update);


notificationApp.delete('/:notificationId', notificationCtrl.delete);






module.exports = notificationApp;

