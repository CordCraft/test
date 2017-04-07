/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var interestApp = express();
var interestCtrl = require('../controller/interest');

var auth = require('../auth');


interestApp.get('/', interestCtrl.findAll);


interestApp.get('/by/userId', interestCtrl.findByUserId);


interestApp.get('/by/userIds', interestCtrl.findByUserIds);


interestApp.get('/all/proximity', interestCtrl.findAllProximity);


interestApp.get('/all/proximity/zero', interestCtrl.findAllProximityZero);


interestApp.get('/all/proximity/first', interestCtrl.findAllProximityFirst);


interestApp.get('/all/proximity/second', interestCtrl.findAllProximitySecond);


interestApp.get('/all/proximity/third', interestCtrl.findAllProximityThird);


interestApp.get('/selected/proximity', interestCtrl.findSelectedProximity);


interestApp.get('/selected/proximity/zero', interestCtrl.findSelectedProximityZero);


interestApp.get('/selected/proximity/first', interestCtrl.findSelectedProximityFirst);


interestApp.get('/selected/proximity/second', interestCtrl.findSelectedProximitySecond);


interestApp.get('/selected/proximity/third', interestCtrl.findSelectedProximityThird);


interestApp.get('/my/proximity', interestCtrl.findMyProximity);


interestApp.get('/my/proximity/zero', interestCtrl.findMyProximityZero);


interestApp.get('/my/proximity/first', interestCtrl.findMyProximityFirst);


interestApp.get('/my/proximity/second', interestCtrl.findMyProximitySecond);


interestApp.get('/my/proximity/third', interestCtrl.findMyProximityThird);


interestApp.get('/by/:userId/proximity', interestCtrl.findByProximity);


interestApp.get('/by/:userId/proximity/zero', interestCtrl.findByProximityZero);


interestApp.get('/by/:userId/proximity/first', interestCtrl.findByProximityFirst);


interestApp.get('/by/:userId/proximity/second', interestCtrl.findByProximitySecond);


interestApp.get('/by/:userId/proximity/third', interestCtrl.findByProximityThird);


interestApp.get('/:interestId', interestCtrl.findById);


interestApp.post('/', interestCtrl.create);


interestApp.put('/:interestId', interestCtrl.update);


interestApp.delete('/:interestId', interestCtrl.delete);






module.exports = interestApp;

