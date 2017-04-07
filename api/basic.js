/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var basicApp = express();
var basicCtrl = require('../controller/basic');

var auth = require('../auth');


basicApp.get('/', basicCtrl.findAll);


basicApp.get('/by/userId', basicCtrl.findByUserId);


basicApp.get('/by/userIds', basicCtrl.findByUserIds);


basicApp.get('/all/proximity', basicCtrl.findAllProximity);


basicApp.get('/all/proximity/zero', basicCtrl.findAllProximityZero);


basicApp.get('/all/proximity/first', basicCtrl.findAllProximityFirst);


basicApp.get('/all/proximity/second', basicCtrl.findAllProximitySecond);


basicApp.get('/all/proximity/third', basicCtrl.findAllProximityThird);


basicApp.get('/selected/proximity', basicCtrl.findSelectedProximity);


basicApp.get('/selected/proximity/zero', basicCtrl.findSelectedProximityZero);


basicApp.get('/selected/proximity/first', basicCtrl.findSelectedProximityFirst);


basicApp.get('/selected/proximity/second', basicCtrl.findSelectedProximitySecond);


basicApp.get('/selected/proximity/third', basicCtrl.findSelectedProximityThird);


basicApp.get('/my/proximity', basicCtrl.findMyProximity);


basicApp.get('/my/proximity/zero', basicCtrl.findMyProximityZero);


basicApp.get('/my/proximity/first', basicCtrl.findMyProximityFirst);


basicApp.get('/my/proximity/second', basicCtrl.findMyProximitySecond);


basicApp.get('/my/proximity/third', basicCtrl.findMyProximityThird);


basicApp.get('/by/:userId/proximity', basicCtrl.findByProximity);


basicApp.get('/by/:userId/proximity/zero', basicCtrl.findByProximityZero);


basicApp.get('/by/:userId/proximity/first', basicCtrl.findByProximityFirst);


basicApp.get('/by/:userId/proximity/second', basicCtrl.findByProximitySecond);


basicApp.get('/by/:userId/proximity/third', basicCtrl.findByProximityThird);


basicApp.get('/:basicId', basicCtrl.findById);


basicApp.post('/', basicCtrl.create);


basicApp.put('/:basicId', basicCtrl.update);


basicApp.delete('/:basicId', basicCtrl.delete);






module.exports = basicApp;

