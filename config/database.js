/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var config = {
    secret: "ddfaefjfaepoefioeihefdga",
    local:"mongodb://127.0.0.1:27017/main",
    cloud:"mongodb://abiolaonikoyi:Cordcraft1*@cluster0-shard-00-00-dn8v9.mongodb.net:27017,cluster0-shard-00-01-dn8v9.mongodb.net:27017,cluster0-shard-00-02-dn8v9.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",
    localTest:"mongodb://127.0.0.1:27017/test"
};

module.exports = config;
