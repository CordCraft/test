/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var orderApp = express();
var orderCtrl = require('../controller/order');

var auth = require('../auth');


orderApp.get('/', orderCtrl.findAll);


orderApp.get('/by/userId', orderCtrl.findByUserId);


orderApp.get('/by/userIds', orderCtrl.findByUserIds);


orderApp.get('/all/proximity', orderCtrl.findAllProximity);


orderApp.get('/all/proximity/zero', orderCtrl.findAllProximityZero);


orderApp.get('/all/proximity/first', orderCtrl.findAllProximityFirst);


orderApp.get('/all/proximity/second', orderCtrl.findAllProximitySecond);


orderApp.get('/all/proximity/third', orderCtrl.findAllProximityThird);


orderApp.get('/selected/proximity', orderCtrl.findSelectedProximity);


orderApp.get('/selected/proximity/zero', orderCtrl.findSelectedProximityZero);


orderApp.get('/selected/proximity/first', orderCtrl.findSelectedProximityFirst);


orderApp.get('/selected/proximity/second', orderCtrl.findSelectedProximitySecond);


orderApp.get('/selected/proximity/third', orderCtrl.findSelectedProximityThird);


orderApp.get('/my/proximity', orderCtrl.findMyProximity);


orderApp.get('/my/proximity/zero', orderCtrl.findMyProximityZero);


orderApp.get('/my/proximity/first', orderCtrl.findMyProximityFirst);


orderApp.get('/my/proximity/second', orderCtrl.findMyProximitySecond);


orderApp.get('/my/proximity/third', orderCtrl.findMyProximityThird);


orderApp.get('/by/:userId/proximity', orderCtrl.findByProximity);


orderApp.get('/by/:userId/proximity/zero', orderCtrl.findByProximityZero);


orderApp.get('/by/:userId/proximity/first', orderCtrl.findByProximityFirst);


orderApp.get('/by/:userId/proximity/second', orderCtrl.findByProximitySecond);


orderApp.get('/by/:userId/proximity/third', orderCtrl.findByProximityThird);


orderApp.get('/:orderId', orderCtrl.findById);


orderApp.post('/', orderCtrl.create);


orderApp.put('/:orderId', orderCtrl.update);


orderApp.delete('/:orderId', orderCtrl.delete);






module.exports = orderApp;

