/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var FindByUserIdPlugin = function(schema, option){
    
    schema.statics.findByUserId = function(conditions){
        if(this.modelName === "Profile"){
            return this.findById(conditions.userId);
        }
        else{
            return this.find({userId:conditions.userId});
        }
    };
    
    
};



module.exports = FindByUserIdPlugin;