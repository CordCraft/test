/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var audio = require("../bin/socket.io-piper")("/audio");
var e = audio.e();




onFindAll = function(data){
    var message = {
        event: e.FIND_ALL
    };
    audio.to(data.token).emit(e.FIND_ALL, message);
};


onFindAllFailed = function(data){
    var message = {
        event: e.FIND_ALL
    };
    audio.emit(e.FIND_ALL_FAILED, message);
}


onFindAllSuccess = function(data){
    var message = {
        event: e.FIND_ALL
    };
    audio.emit(e.FIND_ALL_SUCCESS, "");
}


onFindById = function(data){
    
    audio.emit(e.FIND_BY_ID, "");
};


onFindByIdFailed = function(data){
    
    audio.emit(e.FIND_BY_ID_FAILED, "");
};


onFindByIdSuccess = function(data){
    
    audio.emit(e.FIND_BY_ID_SUCCESS, "");
};



onFindByUserId = function(data){
    
    audio.emit(e.FIND_BY_USER_ID, "");
};


onFindByUserIdFailed = function(data){
    
    audio.emit(e.FIND_BY_USER_ID_FAILED, "");
};


onFindByUserIdSuccess = function(data){
    
    audio.emit(e.FIND_BY_USER_ID_SUCCESS, "");
};


onFindByUserIds = function(data){
    
    audio.emit(e.FIND_BY_USER_IDS, "");
};


onFindByUserIdsFailed = function(data){
    
    audio.emit(e.FIND_BY_USER_IDS_FAILED, "");
};


onFindByUserIdsSuccess = function(data){
    
    audio.to(data.token).emit(e.FIND_BY_USER_IDS_SUCCESS, "");
};


onCreate = function(data){
    
    audio.to(data.token).emit(e.CREATE, "");
};


onCreateFailed = function(data){
    
    audio.to(data.token).emit(e.CREATE_FAILED, "");
};


onCreateSuccess = function(data){
    
    audio.to(data.token).emit(e.CREATE_SUCCESS, "");
};


onUpdate = function(data){
    
    audio.to(data.token).emit(e.UPDATE, "");
};


onUpdateFailed = function(data){
    
    audio.to(data.token).emit(e.UPDATE_FAILED, "");
};


onUpdateSuccess = function(data){
    
    audio.to(data.token).emit(e.UPDATE_SUCCESS, "");
};


onDelete = function(data){
    
    audio.to(data.token).emit(e.DELETE, "");
}


onDeleteFailed = function(data){
    
    audio.to(data.token).emit(e.DELETE_FAILED, "");
}


onDeleteSuccess = function(data){
    
    audio.to(data.token).emit(e.DELETE_SUCCESS, "");
}





