/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(namespace){
    var e = require("../event"+namespace);
    var io = require("../server");
    var model = io.of(namespace);
    //Change to null for production;
    //var tokenRoom = null;
    var tokenRoom = "50000";

    //join names space to event
    model.on("connection", function(socket){
        formHandShake(socket);
    });
    
    
    //contains all model events.
    function e(){
        return e;
    }
    
    
    //USE THIS FOR PRODUCTION
    function formHandShake(socket){
        if(tokenRoom === null){
            io.get("accessToken", function(accessToken){
                if(accessToken !== null ){
                    tokenRoom = accessToken;
                    socket.join(tokenRoom);
                    socket.emit("granted", true);
                }else{
                    socket.emit("granted", false);
                }
            });
        }
    }
    
    
    function emit(event, message){
        return model.to(tokenRoom).emit(event, message);
    };
    
    function to(room){
        return model.to(room);
    };
    
};

