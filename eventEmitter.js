/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var events = require('events');
var emitter = new events.EventEmitter();
var actions = require('../actions/audio');


var  audioEvents= {
    FIND_ALL:"",
    FIND_ALL_FAILED:"",
    FIND_ALL_SUCCESS:"",
    FIND_BY_ID:"",
    FIND_BY_ID_FAILED:"",
    FIND_BY_ID_SUCCESS:"",
    FIND_BY_USER_ID:"",
    FIND_BY_USER_ID_FAILED:"",
    FIND_BY_USER_ID_SUCCESS:"",
    FIND_BY_USER_IDS:"",
    FIND_BY_USER_IDS_FAILED:"",
    FIND_BY_USER_IDS_SUCCESS:"",
    CREATE:"",
    CREATE_FAILED:"",
    CREATE_SUCCESS:"",
    UPDATE:"",
    UPDATE_FAILED:"",
    UPDATE_SUCCESS:"",
    DELETE:"",
    DELETE_FAILED:"",
    DELETE_SUCCESS:""
};



emitter.on(audioEvents.FIND_ALL, onFindAll);
emitter.on(audioEvents.FIND_BY_ID, onFindById);
emitter.on(audioEvents.FIND_BY_USER_ID, onFindByUserId);


module.exports = audioEvents;
