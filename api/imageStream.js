/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var imageStreamApp = express();
var imageStreamCtrl = require('../controller/imageStream');

var auth = require('../auth');


imageStreamApp.get('/', imageStreamCtrl.findAll);


imageStreamApp.get('/by/userId', imageStreamCtrl.findByUserId);


imageStreamApp.get('/by/userIds', imageStreamCtrl.findByUserIds);


imageStreamApp.get('/all/proximity', imageStreamCtrl.findAllProximity);


imageStreamApp.get('/all/proximity/zero', imageStreamCtrl.findAllProximityZero);


imageStreamApp.get('/all/proximity/first', imageStreamCtrl.findAllProximityFirst);


imageStreamApp.get('/all/proximity/second', imageStreamCtrl.findAllProximitySecond);


imageStreamApp.get('/all/proximity/third', imageStreamCtrl.findAllProximityThird);


imageStreamApp.get('/selected/proximity', imageStreamCtrl.findSelectedProximity);


imageStreamApp.get('/selected/proximity/zero', imageStreamCtrl.findSelectedProximityZero);


imageStreamApp.get('/selected/proximity/first', imageStreamCtrl.findSelectedProximityFirst);


imageStreamApp.get('/selected/proximity/second', imageStreamCtrl.findSelectedProximitySecond);


imageStreamApp.get('/selected/proximity/third', imageStreamCtrl.findSelectedProximityThird);


imageStreamApp.get('/my/proximity', imageStreamCtrl.findMyProximity);


imageStreamApp.get('/my/proximity/zero', imageStreamCtrl.findMyProximityZero);


imageStreamApp.get('/my/proximity/first', imageStreamCtrl.findMyProximityFirst);


imageStreamApp.get('/my/proximity/second', imageStreamCtrl.findMyProximitySecond);


imageStreamApp.get('/my/proximity/third', imageStreamCtrl.findMyProximityThird);


imageStreamApp.get('/by/:userId/proximity', imageStreamCtrl.findByProximity);


imageStreamApp.get('/by/:userId/proximity/zero', imageStreamCtrl.findByProximityZero);


imageStreamApp.get('/by/:userId/proximity/first', imageStreamCtrl.findByProximityFirst);


imageStreamApp.get('/by/:userId/proximity/second', imageStreamCtrl.findByProximitySecond);


imageStreamApp.get('/by/:userId/proximity/third', imageStreamCtrl.findByProximityThird);


imageStreamApp.get('/:imageStreamId', imageStreamCtrl.findById);


imageStreamApp.post('/', imageStreamCtrl.create);


imageStreamApp.put('/:imageStreamId', imageStreamCtrl.update);


imageStreamApp.delete('/:imageStreamId', imageStreamCtrl.delete);






module.exports = imageStreamApp;

