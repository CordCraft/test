/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var profileApp = express();
var profileCtrl = require('../controller/profile');

var auth = require('../auth');


profileApp.get('/', profileCtrl.findAll);


profileApp.get('/by/userId', profileCtrl.findByUserId);


profileApp.get('/by/userIds', profileCtrl.findByUserIds);


profileApp.get('/all/proximity', profileCtrl.findAllProximity);


profileApp.get('/all/proximity/zero', profileCtrl.findAllProximityZero);


profileApp.get('/all/proximity/first', profileCtrl.findAllProximityFirst);


profileApp.get('/all/proximity/second', profileCtrl.findAllProximitySecond);


profileApp.get('/all/proximity/third', profileCtrl.findAllProximityThird);


profileApp.get('/selected/proximity', profileCtrl.findSelectedProximity);


profileApp.get('/selected/proximity/zero', profileCtrl.findSelectedProximityZero);


profileApp.get('/selected/proximity/first', profileCtrl.findSelectedProximityFirst);


profileApp.get('/selected/proximity/second', profileCtrl.findSelectedProximitySecond);


profileApp.get('/selected/proximity/third', profileCtrl.findSelectedProximityThird);


profileApp.get('/my/proximity', profileCtrl.findMyProximity);


profileApp.get('/my/proximity/zero', profileCtrl.findMyProximityZero);


profileApp.get('/my/proximity/first', profileCtrl.findMyProximityFirst);


profileApp.get('/my/proximity/second', profileCtrl.findMyProximitySecond);


profileApp.get('/my/proximity/third', profileCtrl.findMyProximityThird);


profileApp.get('/by/:userId/proximity', profileCtrl.findByProximity);


profileApp.get('/by/:userId/proximity/zero', profileCtrl.findByProximityZero);


profileApp.get('/by/:userId/proximity/first', profileCtrl.findByProximityFirst);


profileApp.get('/by/:userId/proximity/second', profileCtrl.findByProximitySecond);


profileApp.get('/by/:userId/proximity/third', profileCtrl.findByProximityThird);


profileApp.get('/:profileId', profileCtrl.findById);


profileApp.post('/', profileCtrl.create);


profileApp.put('/:profileId', profileCtrl.update);


profileApp.delete('/:profileId', profileCtrl.delete);






module.exports = profileApp;

