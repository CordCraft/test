/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




module.exports = function(model){
    var modelPiper = require("./socket.io-piper")(model);
    var e = modelPiper.e();




    onFindAll = function(data){
        var message = {
            event: e.FIND_ALL
        };
        modelPiper.emit(e.FIND_ALL, message);
    };


    onFindAllFailed = function(data){
        var message = {
            event: e.FIND_ALL
        };
        modelPiper.emit(e.FIND_ALL_FAILED, message);
    }


    onFindAllSuccess = function(data){
        var message = {
            event: e.FIND_ALL
        };
        modelPiper.emit(e.FIND_ALL_SUCCESS, "");
    }


    onFindById = function(data){

        modelPiper.emit(e.FIND_BY_ID, "");
    };


    onFindByIdFailed = function(data){

        modelPiper.emit(e.FIND_BY_ID_FAILED, "");
    };


    onFindByIdSuccess = function(data){

        modelPiper.emit(e.FIND_BY_ID_SUCCESS, "");
    };



    onFindByUserId = function(data){

        modelPiper.emit(e.FIND_BY_USER_ID, "");
    };


    onFindByUserIdFailed = function(data){

        modelPiper.emit(e.FIND_BY_USER_ID_FAILED, "");
    };


    onFindByUserIdSuccess = function(data){

        modelPiper.emit(e.FIND_BY_USER_ID_SUCCESS, "");
    };


    onFindByUserIds = function(data){

        modelPiper.emit(e.FIND_BY_USER_IDS, "");
    };


    onFindByUserIdsFailed = function(data){

        modelPiper.emit(e.FIND_BY_USER_IDS_FAILED, "");
    };


    onFindByUserIdsSuccess = function(data){

        modelPiper.emit(e.FIND_BY_USER_IDS_SUCCESS, "");
    };


    onCreate = function(data){

        modelPiper.emit(e.CREATE, "");
    };


    onCreateFailed = function(data){

        modelPiper.emit(e.CREATE_FAILED, "");
    };


    onCreateSuccess = function(data){

        modelPiper.emit(e.CREATE_SUCCESS, "");
    };


    onUpdate = function(data){

        modelPiper.emit(e.UPDATE, "");
    };


    onUpdateFailed = function(data){

        modelPiper.emit(e.UPDATE_FAILED, "");
    };


    onUpdateSuccess = function(data){

        modelPiper.emit(e.UPDATE_SUCCESS, "");
    };


    onDelete = function(data){

        modelPiper.emit(e.DELETE, "");
    }


    onDeleteFailed = function(data){

        modelPiper.emit(e.DELETE_FAILED, "");
    }


    onDeleteSuccess = function(data){

        modelPiper.emit(e.DELETE_SUCCESS, "");
    }

}




