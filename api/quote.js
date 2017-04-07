/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var quoteApp = express();
var quoteCtrl = require('../controller/quote');

var auth = require('../auth');


quoteApp.get('/', quoteCtrl.findAll);


quoteApp.get('/by/userId', quoteCtrl.findByUserId);


quoteApp.get('/by/userIds', quoteCtrl.findByUserIds);


quoteApp.get('/all/proximity', quoteCtrl.findAllProximity);


quoteApp.get('/all/proximity/zero', quoteCtrl.findAllProximityZero);


quoteApp.get('/all/proximity/first', quoteCtrl.findAllProximityFirst);


quoteApp.get('/all/proximity/second', quoteCtrl.findAllProximitySecond);


quoteApp.get('/all/proximity/third', quoteCtrl.findAllProximityThird);


quoteApp.get('/selected/proximity', quoteCtrl.findSelectedProximity);


quoteApp.get('/selected/proximity/zero', quoteCtrl.findSelectedProximityZero);


quoteApp.get('/selected/proximity/first', quoteCtrl.findSelectedProximityFirst);


quoteApp.get('/selected/proximity/second', quoteCtrl.findSelectedProximitySecond);


quoteApp.get('/selected/proximity/third', quoteCtrl.findSelectedProximityThird);


quoteApp.get('/my/proximity', quoteCtrl.findMyProximity);


quoteApp.get('/my/proximity/zero', quoteCtrl.findMyProximityZero);


quoteApp.get('/my/proximity/first', quoteCtrl.findMyProximityFirst);


quoteApp.get('/my/proximity/second', quoteCtrl.findMyProximitySecond);


quoteApp.get('/my/proximity/third', quoteCtrl.findMyProximityThird);


quoteApp.get('/by/:userId/proximity', quoteCtrl.findByProximity);


quoteApp.get('/by/:userId/proximity/zero', quoteCtrl.findByProximityZero);


quoteApp.get('/by/:userId/proximity/first', quoteCtrl.findByProximityFirst);


quoteApp.get('/by/:userId/proximity/second', quoteCtrl.findByProximitySecond);


quoteApp.get('/by/:userId/proximity/third', quoteCtrl.findByProximityThird);


quoteApp.get('/:quoteId', quoteCtrl.findById);


quoteApp.post('/', quoteCtrl.create);


quoteApp.put('/:quoteId', quoteCtrl.update);


quoteApp.delete('/:quoteId', quoteCtrl.delete);






module.exports = quoteApp;

