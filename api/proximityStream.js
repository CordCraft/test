/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var proximityStreamApp = express();
var proximityStreamCtrl = require('../controller/proximityStream');

var auth = require('../auth');


proximityStreamApp.get('/', proximityStreamCtrl.findAll);


proximityStreamApp.get('/by/userId', proximityStreamCtrl.findByUserId);


proximityStreamApp.get('/by/userIds', proximityStreamCtrl.findByUserIds);


proximityStreamApp.get('/all/proximity', proximityStreamCtrl.findAllProximity);


proximityStreamApp.get('/all/proximity/zero', proximityStreamCtrl.findAllProximityZero);


proximityStreamApp.get('/all/proximity/first', proximityStreamCtrl.findAllProximityFirst);


proximityStreamApp.get('/all/proximity/second', proximityStreamCtrl.findAllProximitySecond);


proximityStreamApp.get('/all/proximity/third', proximityStreamCtrl.findAllProximityThird);


proximityStreamApp.get('/selected/proximity', proximityStreamCtrl.findSelectedProximity);


proximityStreamApp.get('/selected/proximity/zero', proximityStreamCtrl.findSelectedProximityZero);


proximityStreamApp.get('/selected/proximity/first', proximityStreamCtrl.findSelectedProximityFirst);


proximityStreamApp.get('/selected/proximity/second', proximityStreamCtrl.findSelectedProximitySecond);


proximityStreamApp.get('/selected/proximity/third', proximityStreamCtrl.findSelectedProximityThird);


proximityStreamApp.get('/my/proximity', proximityStreamCtrl.findMyProximity);


proximityStreamApp.get('/my/proximity/zero', proximityStreamCtrl.findMyProximityZero);


proximityStreamApp.get('/my/proximity/first', proximityStreamCtrl.findMyProximityFirst);


proximityStreamApp.get('/my/proximity/second', proximityStreamCtrl.findMyProximitySecond);


proximityStreamApp.get('/my/proximity/third', proximityStreamCtrl.findMyProximityThird);


proximityStreamApp.get('/by/:userId/proximity', proximityStreamCtrl.findByProximity);


proximityStreamApp.get('/by/:userId/proximity/zero', proximityStreamCtrl.findByProximityZero);


proximityStreamApp.get('/by/:userId/proximity/first', proximityStreamCtrl.findByProximityFirst);


proximityStreamApp.get('/by/:userId/proximity/second', proximityStreamCtrl.findByProximitySecond);


proximityStreamApp.get('/by/:userId/proximity/third', proximityStreamCtrl.findByProximityThird);


proximityStreamApp.get('/:proximityStreamId', proximityStreamCtrl.findById);


proximityStreamApp.post('/', proximityStreamCtrl.create);


proximityStreamApp.put('/:proximityStreamId', proximityStreamCtrl.update);


proximityStreamApp.delete('/:proximityStreamId', proximityStreamCtrl.delete);






module.exports = proximityStreamApp;

