/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
  
module.exports = function(modelNamespace){
    var modelApp = express(); 
    var modelCtrl = new require('../bin/controller')(modelNamespace);



    modelApp.get('/', modelCtrl.findAllByUserId);
    
    
    modelApp.get('/proximity0', modelCtrl.proximity0);
    
    
    modelApp.get('/proximity1', modelCtrl.proximity1);
    
    
    modelApp.get('/proximity2', modelCtrl.proximity2);
    
    
    modelApp.get('/proximity3', modelCtrl.proximity3);


    modelApp.get('/by/userId', modelCtrl.findByUserId);


    modelApp.get('/by/userIds', modelCtrl.findByUserIds);
    

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


