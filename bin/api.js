/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
  
module.exports = function(modelNamespace){
    var modelApp = express(); 
    var modelCtrl = new require('../bin/controller')(modelNamespace);



    modelApp.get('/', modelCtrl.findAll);
    
    
    modelApp.get('/proximity0', modelCtrl.find0);
    
    
    modelApp.get('/proximity1', modelCtrl.find1);
    
    
    modelApp.get('/proximity2', modelCtrl.find2);
    
    
    modelApp.get('/proximity3', modelCtrl.find3);


    modelApp.get('/by/userId', modelCtrl.findByUserId);


    modelApp.get('/by/userIds', modelCtrl.findByUserIds);


    modelApp.get('/all/proximity', modelCtrl.findAllProximity);


    modelApp.get('/all/proximity/zero', modelCtrl.findAllProximityZero);


    modelApp.get('/all/proximity/first', modelCtrl.findAllProximityFirst);


    modelApp.get('/all/proximity/second', modelCtrl.findAllProximitySecond);


    modelApp.get('/all/proximity/third', modelCtrl.findAllProximityThird);


    modelApp.get('/selected/proximity', modelCtrl.findSelectedProximity);


    modelApp.get('/selected/proximity/zero', modelCtrl.findSelectedProximityZero);


    modelApp.get('/selected/proximity/first', modelCtrl.findSelectedProximityFirst);


    modelApp.get('/selected/proximity/second', modelCtrl.findSelectedProximitySecond);


    modelApp.get('/selected/proximity/third', modelCtrl.findSelectedProximityThird);


    modelApp.get('/my/proximity', modelCtrl.findMyProximity);


    modelApp.get('/my/proximity/zero', modelCtrl.findMyProximityZero);


    modelApp.get('/my/proximity/first', modelCtrl.findMyProximityFirst);


    modelApp.get('/my/proximity/second', modelCtrl.findMyProximitySecond);


    modelApp.get('/my/proximity/third', modelCtrl.findMyProximityThird);


    modelApp.get('/by/:userId/proximity', modelCtrl.findByProximity);


    modelApp.get('/by/:userId/proximity/zero', modelCtrl.findByProximityZero);


    modelApp.get('/by/:userId/proximity/first', modelCtrl.findByProximityFirst);


    modelApp.get('/by/:userId/proximity/second', modelCtrl.findByProximitySecond);


    modelApp.get('/by/:userId/proximity/third', modelCtrl.findByProximityThird);


    modelApp.get('/:modelId', modelCtrl.findById);


    modelApp.post('/', modelCtrl.create);


    modelApp.put('/play()', modelCtrl.update);


    modelApp.put('/pause()', modelCtrl.update);


    modelApp.put('/resumeAt(/:time)', modelCtrl.update);


    modelApp.put('/stop()', modelCtrl.update);


    modelApp.put('/:modelId', modelCtrl.update);


    modelApp.delete('/:modelId', modelCtrl.delete);
    
    
    return modelApp;

};


