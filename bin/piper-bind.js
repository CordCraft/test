/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(model){
    
    var emitter = new require("events").EventEmitter();
    var event = require('./piper-event')(model);
    var action = require('./piper-action')(model);
    
    
    
    emitter.on(event.FIND_ALL, action.onFindAll);
    emitter.on(event.FIND_BY_ID, action.onFindById);
    emitter.on(event.FIND_BY_USER_ID, action.onFindByUserId);
    emitter.on(event.FIND_BY_USER_IDS, action.onFindByUserIds);
    emitter.on(event.CREATE, action.onCreate);
    emitter.on(event.UPDATE, action.onUpdate);
    emitter.on(event.DELETE, action.onDelete);
    emitter.on(event.UPLOAD, action.onUpload);
    emitter.on(event.DOWNLOAD, action.onDownload);
    
    return event;
};

