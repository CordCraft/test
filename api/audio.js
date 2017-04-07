/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var audioApp = express();
var audioCtrl = require('../controller/audio');

var auth = require('../auth');


audioApp.get('/', audioCtrl.findAll);


audioApp.get('/by/userId', audioCtrl.findByUserId);


audioApp.get('/by/userIds', audioCtrl.findByUserIds);


audioApp.get('/all/proximity', audioCtrl.findAllProximity);


audioApp.get('/all/proximity/zero', audioCtrl.findAllProximityZero);


audioApp.get('/all/proximity/first', audioCtrl.findAllProximityFirst);


audioApp.get('/all/proximity/second', audioCtrl.findAllProximitySecond);


audioApp.get('/all/proximity/third', audioCtrl.findAllProximityThird);


audioApp.get('/selected/proximity', audioCtrl.findSelectedProximity);


audioApp.get('/selected/proximity/zero', audioCtrl.findSelectedProximityZero);


audioApp.get('/selected/proximity/first', audioCtrl.findSelectedProximityFirst);


audioApp.get('/selected/proximity/second', audioCtrl.findSelectedProximitySecond);


audioApp.get('/selected/proximity/third', audioCtrl.findSelectedProximityThird);


audioApp.get('/my/proximity', audioCtrl.findMyProximity);


audioApp.get('/my/proximity/zero', audioCtrl.findMyProximityZero);


audioApp.get('/my/proximity/first', audioCtrl.findMyProximityFirst);


audioApp.get('/my/proximity/second', audioCtrl.findMyProximitySecond);


audioApp.get('/my/proximity/third', audioCtrl.findMyProximityThird);


audioApp.get('/by/:userId/proximity', audioCtrl.findByProximity);


audioApp.get('/by/:userId/proximity/zero', audioCtrl.findByProximityZero);


audioApp.get('/by/:userId/proximity/first', audioCtrl.findByProximityFirst);


audioApp.get('/by/:userId/proximity/second', audioCtrl.findByProximitySecond);


audioApp.get('/by/:userId/proximity/third', audioCtrl.findByProximityThird);


audioApp.get('/:audioId', audioCtrl.findById);


audioApp.post('/', audioCtrl.create);


audioApp.put('/play()', audioCtrl.update);


audioApp.put('/pause()', audioCtrl.update);


audioApp.put('/resumeAt(/:time)', audioCtrl.update);


audioApp.put('/stop()', audioCtrl.update);


audioApp.put('/:audioId', audioCtrl.update);


audioApp.delete('/:audioId', audioCtrl.delete);




module.exports = audioApp;

