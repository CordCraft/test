/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var networkApp = express();
var networkCtrl = require('../controller/network');

var auth = require('../auth');


networkApp.get('/', networkCtrl.findAll);


networkApp.get('/by/userId', networkCtrl.findByUserId);


networkApp.get('/by/userIds', networkCtrl.findByUserIds);


networkApp.get('/all/proximity', networkCtrl.findAllProximity);


networkApp.get('/all/proximity/zero', networkCtrl.findAllProximityZero);


networkApp.get('/all/proximity/first', networkCtrl.findAllProximityFirst);


networkApp.get('/all/proximity/second', networkCtrl.findAllProximitySecond);


networkApp.get('/all/proximity/third', networkCtrl.findAllProximityThird);


networkApp.get('/selected/proximity', networkCtrl.findSelectedProximity);


networkApp.get('/selected/proximity/zero', networkCtrl.findSelectedProximityZero);


networkApp.get('/selected/proximity/first', networkCtrl.findSelectedProximityFirst);


networkApp.get('/selected/proximity/second', networkCtrl.findSelectedProximitySecond);


networkApp.get('/selected/proximity/third', networkCtrl.findSelectedProximityThird);


networkApp.get('/my/proximity', networkCtrl.findMyProximity);


networkApp.get('/my/proximity/zero', networkCtrl.findMyProximityZero);


networkApp.get('/my/proximity/first', networkCtrl.findMyProximityFirst);


networkApp.get('/my/proximity/second', networkCtrl.findMyProximitySecond);


networkApp.get('/my/proximity/third', networkCtrl.findMyProximityThird);


networkApp.get('/by/:userId/proximity', networkCtrl.findByProximity);


networkApp.get('/by/:userId/proximity/zero', networkCtrl.findByProximityZero);


networkApp.get('/by/:userId/proximity/first', networkCtrl.findByProximityFirst);


networkApp.get('/by/:userId/proximity/second', networkCtrl.findByProximitySecond);


networkApp.get('/by/:userId/proximity/third', networkCtrl.findByProximityThird);


networkApp.get('/:networkId', networkCtrl.findById);


networkApp.post('/', networkCtrl.create);


networkApp.put('/:networkId', networkCtrl.update);


networkApp.delete('/:networkId', networkCtrl.delete);






module.exports = networkApp;

