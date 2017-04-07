/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var developerApp = express();
var developerCtrl = require('../controller/developer');

var auth = require('../auth');


developerApp.get('/', developerCtrl.findAll);


developerApp.get('/by/userId', developerCtrl.findByUserId);


developerApp.get('/by/userIds', developerCtrl.findByUserIds);


developerApp.get('/all/proximity', developerCtrl.findAllProximity);


developerApp.get('/all/proximity/zero', developerCtrl.findAllProximityZero);


developerApp.get('/all/proximity/first', developerCtrl.findAllProximityFirst);


developerApp.get('/all/proximity/second', developerCtrl.findAllProximitySecond);


developerApp.get('/all/proximity/third', developerCtrl.findAllProximityThird);


developerApp.get('/selected/proximity', developerCtrl.findSelectedProximity);


developerApp.get('/selected/proximity/zero', developerCtrl.findSelectedProximityZero);


developerApp.get('/selected/proximity/first', developerCtrl.findSelectedProximityFirst);


developerApp.get('/selected/proximity/second', developerCtrl.findSelectedProximitySecond);


developerApp.get('/selected/proximity/third', developerCtrl.findSelectedProximityThird);


developerApp.get('/my/proximity', developerCtrl.findMyProximity);


developerApp.get('/my/proximity/zero', developerCtrl.findMyProximityZero);


developerApp.get('/my/proximity/first', developerCtrl.findMyProximityFirst);


developerApp.get('/my/proximity/second', developerCtrl.findMyProximitySecond);


developerApp.get('/my/proximity/third', developerCtrl.findMyProximityThird);


developerApp.get('/by/:userId/proximity', developerCtrl.findByProximity);


developerApp.get('/by/:userId/proximity/zero', developerCtrl.findByProximityZero);


developerApp.get('/by/:userId/proximity/first', developerCtrl.findByProximityFirst);


developerApp.get('/by/:userId/proximity/second', developerCtrl.findByProximitySecond);


developerApp.get('/by/:userId/proximity/third', developerCtrl.findByProximityThird);


developerApp.get('/:developerId', developerCtrl.findById);


developerApp.post('/', developerCtrl.create);


developerApp.put('/:developerId', developerCtrl.update);


developerApp.delete('/:developerId', developerCtrl.delete);






module.exports = developerApp;

