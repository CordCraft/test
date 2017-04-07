/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var userApp = express();
var userCtrl = require('../controller/user');

var auth = require('../auth');


userApp.get('/', userCtrl.findAll);


userApp.get('/by/userId', userCtrl.findByUserId);


userApp.get('/by/userIds', userCtrl.findByUserIds);


userApp.get('/all/proximity', userCtrl.findAllProximity);


userApp.get('/all/proximity/zero', userCtrl.findAllProximityZero);


userApp.get('/all/proximity/first', userCtrl.findAllProximityFirst);


userApp.get('/all/proximity/second', userCtrl.findAllProximitySecond);


userApp.get('/all/proximity/third', userCtrl.findAllProximityThird);


userApp.get('/selected/proximity', userCtrl.findSelectedProximity);


userApp.get('/selected/proximity/zero', userCtrl.findSelectedProximityZero);


userApp.get('/selected/proximity/first', userCtrl.findSelectedProximityFirst);


userApp.get('/selected/proximity/second', userCtrl.findSelectedProximitySecond);


userApp.get('/selected/proximity/third', userCtrl.findSelectedProximityThird);


userApp.get('/my/proximity', userCtrl.findMyProximity);


userApp.get('/my/proximity/zero', userCtrl.findMyProximityZero);


userApp.get('/my/proximity/first', userCtrl.findMyProximityFirst);


userApp.get('/my/proximity/second', userCtrl.findMyProximitySecond);


userApp.get('/my/proximity/third', userCtrl.findMyProximityThird);


userApp.get('/by/:userId/proximity', userCtrl.findByProximity);


userApp.get('/by/:userId/proximity/zero', userCtrl.findByProximityZero);


userApp.get('/by/:userId/proximity/first', userCtrl.findByProximityFirst);


userApp.get('/by/:userId/proximity/second', userCtrl.findByProximitySecond);


userApp.get('/by/:userId/proximity/third', userCtrl.findByProximityThird);


userApp.get('/:userId', userCtrl.findById);


userApp.post('/', userCtrl.create);


userApp.put('/:userId', userCtrl.update);


userApp.delete('/:userId', userCtrl.delete);






module.exports = userApp;

