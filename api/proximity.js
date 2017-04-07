/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var proximityApp = express();
var proximityCtrl = require('../controller/proximity');

var auth = require('../auth');


proximityApp.get('/', proximityCtrl.findAll);


proximityApp.get('/by/userId', proximityCtrl.findByUserId);


proximityApp.get('/by/userIds', proximityCtrl.findByUserIds);


proximityApp.get('/all/proximity', proximityCtrl.findAllProximity);


proximityApp.get('/all/proximity/zero', proximityCtrl.findAllProximityZero);


proximityApp.get('/all/proximity/first', proximityCtrl.findAllProximityFirst);


proximityApp.get('/all/proximity/second', proximityCtrl.findAllProximitySecond);


proximityApp.get('/all/proximity/third', proximityCtrl.findAllProximityThird);


proximityApp.get('/selected/proximity', proximityCtrl.findSelectedProximity);


proximityApp.get('/selected/proximity/zero', proximityCtrl.findSelectedProximityZero);


proximityApp.get('/selected/proximity/first', proximityCtrl.findSelectedProximityFirst);


proximityApp.get('/selected/proximity/second', proximityCtrl.findSelectedProximitySecond);


proximityApp.get('/selected/proximity/third', proximityCtrl.findSelectedProximityThird);


proximityApp.get('/my/proximity', proximityCtrl.findMyProximity);


proximityApp.get('/my/proximity/zero', proximityCtrl.findMyProximityZero);


proximityApp.get('/my/proximity/first', proximityCtrl.findMyProximityFirst);


proximityApp.get('/my/proximity/second', proximityCtrl.findMyProximitySecond);


proximityApp.get('/my/proximity/third', proximityCtrl.findMyProximityThird);


proximityApp.get('/by/:userId/proximity', proximityCtrl.findByProximity);


proximityApp.get('/by/:userId/proximity/zero', proximityCtrl.findByProximityZero);


proximityApp.get('/by/:userId/proximity/first', proximityCtrl.findByProximityFirst);


proximityApp.get('/by/:userId/proximity/second', proximityCtrl.findByProximitySecond);


proximityApp.get('/by/:userId/proximity/third', proximityCtrl.findByProximityThird);


proximityApp.get('/:proximityId', proximityCtrl.findById);


proximityApp.post('/', proximityCtrl.create);


proximityApp.put('/:proximityId', proximityCtrl.update);


proximityApp.delete('/:proximityId', proximityCtrl.delete);






module.exports = proximityApp;

