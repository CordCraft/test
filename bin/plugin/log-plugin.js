/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var SAVE = "save";
var UPDATE = "update";
var DELETE = "delete";

function updateLog(action, schema){
    var objectId = schema.ObjectId;
    var userId = null;
    var log = {
        userId:userId,
        actions:{
            $push:{
                action:action,
                model:schema,
                modelId: objectId
            }
        }
    }
};


var LogPlugin = function(schema, options){
    console.log(schema);
    
    schema.post(SAVE, updateLog(SAVE, schema));
    schema.post(UPDATE, updateLog(UPDATE, schema));
    schema.post(DELETE, updateLog(DELETE, schema));
};



module.exports = LogPlugin;



