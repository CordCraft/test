/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var educationApp = express();
var educationCtrl = require('../controller/education');

var auth = require('../auth');


educationApp.get('/', educationCtrl.findAll);


educationApp.get('/by/userId', educationCtrl.findByUserId);


educationApp.get('/by/userIds', educationCtrl.findByUserIds);


educationApp.get('/all/proximity', educationCtrl.findAllProximity);


educationApp.get('/all/proximity/zero', educationCtrl.findAllProximityZero);


educationApp.get('/all/proximity/first', educationCtrl.findAllProximityFirst);


educationApp.get('/all/proximity/second', educationCtrl.findAllProximitySecond);


educationApp.get('/all/proximity/third', educationCtrl.findAllProximityThird);


educationApp.get('/selected/proximity', educationCtrl.findSelectedProximity);


educationApp.get('/selected/proximity/zero', educationCtrl.findSelectedProximityZero);


educationApp.get('/selected/proximity/first', educationCtrl.findSelectedProximityFirst);


educationApp.get('/selected/proximity/second', educationCtrl.findSelectedProximitySecond);


educationApp.get('/selected/proximity/third', educationCtrl.findSelectedProximityThird);


educationApp.get('/my/proximity', educationCtrl.findMyProximity);


educationApp.get('/my/proximity/zero', educationCtrl.findMyProximityZero);


educationApp.get('/my/proximity/first', educationCtrl.findMyProximityFirst);


educationApp.get('/my/proximity/second', educationCtrl.findMyProximitySecond);


educationApp.get('/my/proximity/third', educationCtrl.findMyProximityThird);


educationApp.get('/by/:userId/proximity', educationCtrl.findByProximity);


educationApp.get('/by/:userId/proximity/zero', educationCtrl.findByProximityZero);


educationApp.get('/by/:userId/proximity/first', educationCtrl.findByProximityFirst);


educationApp.get('/by/:userId/proximity/second', educationCtrl.findByProximitySecond);


educationApp.get('/by/:userId/proximity/third', educationCtrl.findByProximityThird);


educationApp.get('/:educationId', educationCtrl.findById);


educationApp.post('/', educationCtrl.create);


educationApp.put('/:educationId', educationCtrl.update);


educationApp.delete('/:educationId', educationCtrl.delete);






module.exports = educationApp;

