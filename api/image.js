/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var imageApp = express();
var imageCtrl = require('../controller/image');

var auth = require('../auth');


imageApp.get('/', imageCtrl.findAll);


imageApp.get('/by/userId', imageCtrl.findByUserId);


imageApp.get('/by/userIds', imageCtrl.findByUserIds);


imageApp.get('/all/proximity', imageCtrl.findAllProximity);


imageApp.get('/all/proximity/zero', imageCtrl.findAllProximityZero);


imageApp.get('/all/proximity/first', imageCtrl.findAllProximityFirst);


imageApp.get('/all/proximity/second', imageCtrl.findAllProximitySecond);


imageApp.get('/all/proximity/third', imageCtrl.findAllProximityThird);


imageApp.get('/selected/proximity', imageCtrl.findSelectedProximity);


imageApp.get('/selected/proximity/zero', imageCtrl.findSelectedProximityZero);


imageApp.get('/selected/proximity/first', imageCtrl.findSelectedProximityFirst);


imageApp.get('/selected/proximity/second', imageCtrl.findSelectedProximitySecond);


imageApp.get('/selected/proximity/third', imageCtrl.findSelectedProximityThird);


imageApp.get('/my/proximity', imageCtrl.findMyProximity);


imageApp.get('/my/proximity/zero', imageCtrl.findMyProximityZero);


imageApp.get('/my/proximity/first', imageCtrl.findMyProximityFirst);


imageApp.get('/my/proximity/second', imageCtrl.findMyProximitySecond);


imageApp.get('/my/proximity/third', imageCtrl.findMyProximityThird);


imageApp.get('/by/:userId/proximity', imageCtrl.findByProximity);


imageApp.get('/by/:userId/proximity/zero', imageCtrl.findByProximityZero);


imageApp.get('/by/:userId/proximity/first', imageCtrl.findByProximityFirst);


imageApp.get('/by/:userId/proximity/second', imageCtrl.findByProximitySecond);


imageApp.get('/by/:userId/proximity/third', imageCtrl.findByProximityThird);


imageApp.get('/:imageId', imageCtrl.findById);


imageApp.post('/', imageCtrl.create);


imageApp.put('/:imageId', imageCtrl.update);


imageApp.delete('/:imageId', imageCtrl.delete);






module.exports = imageApp;

