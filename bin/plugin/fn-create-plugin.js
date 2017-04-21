/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var secretGen = require('rand-token').uid;
var idGen = require('rand-token').suid;
var jwt = require("jsonwebtoken");

var SECRET_LENGTH = 16;
var ID_LENGTH = 20;


function NonAuthenCreatePlugin(schema, option){
    schema.methods.create = function(){
        return this.save();
    };
}


function AuthenCreatePlugin(schema, option){
    
    schema.statics.genAccessToken = function(){
        var accessToken = {};
        var secret = secretGen(SECRET_LENGTH);
        var token = jwt.sign({authentication:this}, secret);

        accessToken.secret = secret;
        accessToken.token = token;
        return accessToken;
    };
    
    
    schema.methods.create = function(){
        var $this = this;
        return this.exist({'local.username':$this.local.username})
                .then(function(exist){
            if(!exist && $this.local.username !== null){
                $this.token = $this.model("Authentication").genAccessToken();
                return $this.save();
            }
            else if($this.local.username === null || $this.local.username === null){
                throw new Error("provide email and password");
            }
            else{
                throw new Error("user already exist");
            };
        });
    };
};


function AppAuthenCreatePlugin(schema,  option){
    
    schema.methods.create = function(callback){
        var developer = this;
        var appSecret = secretGen(SECRET_LENGTH);
        var appId = idGen(ID_LENGTH);
        var accessType = developer.accessType;
        var appName = developer.appName;
        var appKey = jwt.sign({appId:appId, appName:appName, accessType:accessType}, appSecret);

        this.appKey = appKey;
        this.appId = appId;
        this.appSecret = appSecret;
        return this.save(callback);;
    }
};



module.exports = {
    Auth: AuthenCreatePlugin,
    NoAuth: NonAuthenCreatePlugin,
    AppAuth: AppAuthenCreatePlugin
};