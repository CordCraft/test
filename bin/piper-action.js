/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




module.exports = function(model){
    
    var socket = require("./piper-socket")(model);
    var event = require("./piper-event")(model);

    


    onFindAll = function(data){
        var message = {
            event: event.FIND_ALL
        };
        socket.emit(event.FIND_ALL, message);
    };


    onFindAllFailed = function(data){
        var message = {
            event: event.FIND_ALL
        };
        socket.emit(event.FIND_ALL_FAILED, message);
    }


    onFindAllSuccess = function(data){
        var message = {
            event: event.FIND_ALL
        };
        socket.emit(event.FIND_ALL_SUCCESS, "");
    }


    onFindById = function(data){

        socket.emit(event.FIND_BY_ID, "");
    };


    onFindByIdFailed = function(data){

        socket.emit(event.FIND_BY_ID_FAILED, "");
    };


    onFindByIdSuccess = function(data){

        socket.emit(event.FIND_BY_ID_SUCCESS, "");
    };



    onFindByUserId = function(data){

        socket.emit(event.FIND_BY_USER_ID, "");
    };


    onFindByUserIdFailed = function(data){

        socket.emit(event.FIND_BY_USER_ID_FAILED, "");
    };


    onFindByUserIdSuccess = function(data){

        socket.emit(event.FIND_BY_USER_ID_SUCCESS, "");
    };


    onFindByUserIds = function(data){

        socket.emit(event.FIND_BY_USER_IDS, "");
    };


    onFindByUserIdsFailed = function(data){

        socket.emit(event.FIND_BY_USER_IDS_FAILED, "");
    };


    onFindByUserIdsSuccess = function(data){

        socket.emit(event.FIND_BY_USER_IDS_SUCCESS, "");
    };


    onCreate = function(data){

        socket.emit(event.CREATE, "");
    };


    onCreateFailed = function(data){

        socket.emit(event.CREATE_FAILED, "");
    };


    onCreateSuccess = function(data){

        socket.emit(event.CREATE_SUCCESS, "");
    };


    onUpdate = function(data){

        socket.emit(event.UPDATE, "");
    };


    onUpdateFailed = function(data){

        socket.emit(event.UPDATE_FAILED, "");
    };


    onUpdateSuccess = function(data){

        socket.emit(event.UPDATE_SUCCESS, "");
    };


    onDelete = function(data){

        socket.emit(event.DELETE, "");
    }


    onDeleteFailed = function(data){

        socket.emit(event.DELETE_FAILED, "");
    }


    onDeleteSuccess = function(data){

        socket.emit(event.DELETE_SUCCESS, "");
    }
    
    
    onUpload = function(data){
        
        socket.emit(event.UPLOAD, "");
    };
    
    onDownload = function(data){
        
        socket.emit(event.DOWNLOAD, "");
    }

}




