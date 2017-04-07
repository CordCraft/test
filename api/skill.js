/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var skillApp = express();
var skillCtrl = require('../controller/skill');

var auth = require('../auth');


skillApp.get('/', skillCtrl.findAll);


skillApp.get('/by/userId', skillCtrl.findByUserId);


skillApp.get('/by/userIds', skillCtrl.findByUserIds);


skillApp.get('/all/proximity', skillCtrl.findAllProximity);


skillApp.get('/all/proximity/zero', skillCtrl.findAllProximityZero);


skillApp.get('/all/proximity/first', skillCtrl.findAllProximityFirst);


skillApp.get('/all/proximity/second', skillCtrl.findAllProximitySecond);


skillApp.get('/all/proximity/third', skillCtrl.findAllProximityThird);


skillApp.get('/selected/proximity', skillCtrl.findSelectedProximity);


skillApp.get('/selected/proximity/zero', skillCtrl.findSelectedProximityZero);


skillApp.get('/selected/proximity/first', skillCtrl.findSelectedProximityFirst);


skillApp.get('/selected/proximity/second', skillCtrl.findSelectedProximitySecond);


skillApp.get('/selected/proximity/third', skillCtrl.findSelectedProximityThird);


skillApp.get('/my/proximity', skillCtrl.findMyProximity);


skillApp.get('/my/proximity/zero', skillCtrl.findMyProximityZero);


skillApp.get('/my/proximity/first', skillCtrl.findMyProximityFirst);


skillApp.get('/my/proximity/second', skillCtrl.findMyProximitySecond);


skillApp.get('/my/proximity/third', skillCtrl.findMyProximityThird);


skillApp.get('/by/:userId/proximity', skillCtrl.findByProximity);


skillApp.get('/by/:userId/proximity/zero', skillCtrl.findByProximityZero);


skillApp.get('/by/:userId/proximity/first', skillCtrl.findByProximityFirst);


skillApp.get('/by/:userId/proximity/second', skillCtrl.findByProximitySecond);


skillApp.get('/by/:userId/proximity/third', skillCtrl.findByProximityThird);


skillApp.get('/:skillId', skillCtrl.findById);


skillApp.post('/', skillCtrl.create);


skillApp.put('/:skillId', skillCtrl.update);


skillApp.delete('/:skillId', skillCtrl.delete);






module.exports = skillApp;

