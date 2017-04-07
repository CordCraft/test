/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var employmentApp = express();
var employmentCtrl = require('../controller/employment');

var auth = require('../auth');


employmentApp.get('/', employmentCtrl.findAll);


employmentApp.get('/by/userId', employmentCtrl.findByUserId);


employmentApp.get('/by/userIds', employmentCtrl.findByUserIds);


employmentApp.get('/all/proximity', employmentCtrl.findAllProximity);


employmentApp.get('/all/proximity/zero', employmentCtrl.findAllProximityZero);


employmentApp.get('/all/proximity/first', employmentCtrl.findAllProximityFirst);


employmentApp.get('/all/proximity/second', employmentCtrl.findAllProximitySecond);


employmentApp.get('/all/proximity/third', employmentCtrl.findAllProximityThird);


employmentApp.get('/selected/proximity', employmentCtrl.findSelectedProximity);


employmentApp.get('/selected/proximity/zero', employmentCtrl.findSelectedProximityZero);


employmentApp.get('/selected/proximity/first', employmentCtrl.findSelectedProximityFirst);


employmentApp.get('/selected/proximity/second', employmentCtrl.findSelectedProximitySecond);


employmentApp.get('/selected/proximity/third', employmentCtrl.findSelectedProximityThird);


employmentApp.get('/my/proximity', employmentCtrl.findMyProximity);


employmentApp.get('/my/proximity/zero', employmentCtrl.findMyProximityZero);


employmentApp.get('/my/proximity/first', employmentCtrl.findMyProximityFirst);


employmentApp.get('/my/proximity/second', employmentCtrl.findMyProximitySecond);


employmentApp.get('/my/proximity/third', employmentCtrl.findMyProximityThird);


employmentApp.get('/by/:userId/proximity', employmentCtrl.findByProximity);


employmentApp.get('/by/:userId/proximity/zero', employmentCtrl.findByProximityZero);


employmentApp.get('/by/:userId/proximity/first', employmentCtrl.findByProximityFirst);


employmentApp.get('/by/:userId/proximity/second', employmentCtrl.findByProximitySecond);


employmentApp.get('/by/:userId/proximity/third', employmentCtrl.findByProximityThird);


employmentApp.get('/:employmentId', employmentCtrl.findById);


employmentApp.post('/', employmentCtrl.create);


employmentApp.put('/:employmentId', employmentCtrl.update);


employmentApp.delete('/:employmentId', employmentCtrl.delete);






module.exports = employmentApp;

