/* 
 * To change $this license header, choose License Headers in Project Properties.
 * To change $this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ss = require("socket.io-stream");
var fs = require("fs");
var path = require("path");


function SocketIOPlugin(schema, option){
    
    function composeResponse(value, modelNamespace, func, code){
        return {
            action:func+' '+modelNamespace,
            status:code === 200? "success":"error",
            value:value,
            model:modelNamespace,
            code:code
        };
    };
    
    
    schema.statics.socketDelete = function(context, conditions, prefix){
            this.remove(conditions._id).then(function(result){
                var response = composeResponse(result, context.namespace, "delete", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "delete", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketCreate = function(context, conditions, prefix){
            this.create(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "create", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "create", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketUpdate = function(context, conditions, prefix){
            this.findByIdAndUpdate(conditions._id, conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "update", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "update", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketFind = function(context, conditions, prefix){
            this.find({}).then(function(result){
                var response = composeResponse(result, context.namespace, "get all", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get all", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketFindAll = function(context, conditions, prefix){
            
            if(conditions !== null){
                this.findByUserId(conditions).then(function(result){
                    var response = composeResponse(result, context.namespace, "get all by userId", 200);
                    context.to(conditions.userId).emit(prefix+"success", response);
                }).catch(function(err){
                    var response = composeResponse(err, context.namespace, "get all by userId", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
                });
            }
        };
        
        
        schema.statics.socketFindSingle = function(context, conditions, prefix){
            this.findById(conditions._id).then(function(result){
                var response = composeResponse(result, context.namespace, "get one", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get one", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProxFind = function(context, conditions, prefix){
            this.proxFind(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "get all proximity", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get all proximity", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx0Find = function(context, conditions, prefix){
            this.prox0Find(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "get proximity 0", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get proximity 0", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });;
        };
        
        
        schema.statics.socketProx1Find = function(context, conditions, prefix){
            this.prox1Find(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "get proximity 1", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get proximity 1", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx2Find = function(context, conditions, prefix){
            this.prox2Find(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "get proximity 2", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get proximity 2", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx3Find = function(context, conditions, prefix){
            this.prox3Find(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "get proximity 3", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "get proximity 3", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        
        schema.statics.socketProxAutoSearch = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "set proximity auto search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "set proximity auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx0AutoSearch = function(context, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "set proximity 0 auto search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "set proximity 0 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx1AutoSearch = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "set proximity 1 auto search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "set proximity 1 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx2AutoSearch = function(context, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "set proximity 2 auto search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "set proximity 2 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx3AutoSearch = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "set proximity 3 auto search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "set proximity 3 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProxSearch = function(context, conditions, prefix){
            this.proxSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx0Search = function(context, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 0 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 0 normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx1Search = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 1 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 1 normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx2Search = function(context, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 2 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 2 normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketProx3Search = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 3 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 3 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketUpStream = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 1 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 1 normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketDownStream = function(context, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 2 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 2 normal search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketLiveStream = function(context, stream, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 2 normal search", 200);
                ss(context.to(conditions.userId)).emit(prefix+"success", stream);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 2 normal search", 500);
                ss(context.to(conditions.userId)).emit(prefix+"error", response);
            });
        };
        
        
        schema.statics.socketVoiceCall = function(context, stream, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 2 normal search", 200);
                ss(context.to(conditions.userId)).emit(prefix+"success", stream);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 2 normal search", 500);
                ss(context.to(conditions.userId)).emit(prefix+"error", response);
            });
        };
        
        schema.statics.socketVideoCall = function(context, stream, conditions, prefix){
            this.prox0AutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 2 normal search", 200);
                ss(context.to(conditions.userId)).emit(prefix+"success", stream);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 2 normal search", 500);
                ss(context.to(conditions.userId)).emit(prefix+"error", response);
            });
        };
        
        
        
        schema.statics.socketUpload = function(context, conditions, prefix){
            this.proxAutoSearch(conditions).then(function(result){
                var response = composeResponse(result, context.namespace, "proximity 3 normal search", 200);
                context.to(conditions.userId).emit(prefix+"success", response);
            }).catch(function(err){
                var response = composeResponse(err, context.namespace, "proximity 3 auto search", 500);
                    context.to(conditions.userId).emit(prefix+"error", response);
            });
        };
        
        
        
        
        
        
        
        
        
        
        
        
        schema.statics.onSocketDelete = function(context, data){
            if(verifyCredentials(data)){
                this.socketDelete(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketCreate = function(context, data){
            if(verifyCredentials(data)){
                this.socketCreate(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketUpdate = function(context, data){
            if(verifyCredentials(data)){
                this.socketUpdate(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketFind = function(context, data){
            if(verifyCredentials(data)){
                this.socketFind(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketFindAll = function(context, data){
            if(verifyCredentials(data)){
                this.socketFindAll(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketFindSingle = function(context, data){
            if(verifyCredentials(data)){
                this.socketFindSingle(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProxFind = function(context, data){
            if(verifyCredentials(data)){
                this.socketProxFind(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx1Find = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx1Find(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx2Find = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx2Find(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProx3Find = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx3Find(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProxSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProxSearch(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProx0Search = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx0Search(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProx1Search = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx1Search(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProx2Search = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx2Search(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx3Search = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx3Search(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProxAutoSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProxAutoSearch(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx0AutoSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx0AutoSearch(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx1AutoSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx1AutoSearch(context, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketProx2AutoSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx2AutoSearch(context, data.conditions, data.prefix);
            }
        };


        schema.statics.onSocketProx3AutoSearch = function(context, data){
            if(verifyCredentials(data)){
                this.socketProx3AutoSearch(context, data.conditions, data.prefix);
            }
        };
        
        
        schema.statics.onSocketUpStream = function(context, stream, data){
            if(verifyCredentials(data)){
                this.socketUpStream(context, stream, data.conditions, data.prefix);
            }
        };

        schema.statics.onSocketDownStream = function(context, stream, data){
            if(verifyCredentials(data)){
                this.socketDownStream(context, stream, data.conditions, data.prefix);
            }
        };
        
        schema.statics.onSocketLiveStream = function(context, stream, data){
            if(verifyCredentials(data)){
                this.socketLiveStream(context, stream, data.conditions, data.prefix);
            }
        };


        schema.statics.Upload = function(context, data){
            if(verifyCredentials(data)){
                this.socketUpload(context, data.conditions, data.prefix);
            }
        };
    
    
    
    schema.statics.startSocketListener = function(io){
        var $this = this;
        var context = io.of("/"+$this.modelName.toLowerCase()) ;
        
       
        
        
        
        context.on("connection", function(socket){
            
            
            //$this = $this.base.models[modelName];
            socket.on("DELETE:/", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketDelete(context, data);
            });


            socket.on("POST:/", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketCreate(context, data);
            });


            socket.on("PUT:/", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketUpdate(context, data);
            });


            socket.on("GET:/all", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketFind(context, data);
            });


            socket.on("GET:/", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketFindAll(context, data);
            });


            socket.on("GET:/one", function(data){
                socket.join(data.conditions.userId);
                console.log(data.prefix);
                $this.onSocketFindSingle(context, data);
            });


            socket.on("GET:/proxFind", function(data){
                $this.onSocketProxFind(context, data);
            });


            socket.on("GET:/prox1Find", function(data){
                $this.onSocketProx1Find(context, data);
            });

            socket.on("GET:/prox2Find", function(data){
                $this.onSocketProx2Find(context, data);
            });


            socket.on("GET:/prox3Find", function(data){
                $this.onSocketProx3Find(context, data);
            });


            socket.on("GET:/proxSearch", function(data){
                $this.onSocketProxSearch(context, data);
            });


            socket.on("GET:/prox1Search", function(data){
                $this.onSocketProx1Search(context, data);
            });


            socket.on("GET:/prox2Search", function(data){
                $this.onSocketProx2Search(context, data);
            });


            socket.on("GET:/prox3Search", function(data){
                $this.onSocketProx3Search(context, data);
            });


            socket.on("POST:/proxAutoSearch", function(data){
                $this.onSocketProxAutoSearch(context, data);
            });


            socket.on("POST:/prox1AutoSearch", function(data){
                $this.onSocketProx1AutoSearch(context, data);
            });


            socket.on("POST:/prox2AutoSearch", function(data){
                $this.onSocketProx2AutoSearch(context, data);
            });


            socket.on("POST:/prox3AutoSearch", function(data){
                $this.onSocketProx3AutoSearch(context, data);
            });
            
            
            
            
            ss(socket).on("POST:/upstream", function(stream, data){
                var filename = path.basename("file/image/"+data.name);
                console.log(filename);
                stream.pipe(fs.createWriteStream(filename));
                //$this.onSocketUpStream(context, stream, data);
            });
            
            
            
            ss(socket).on("POST:/downStream", function(stream, data){
                $this.onSocketDownStream(context, stream, data);
                var filename = '';
                fs.createReadSteam(filename).pipe(stream);
            });
            
            
            
            var SocketIOFile = require("socket.io-file");
            this.uploader = null;
            socket.on("POST:/upload", function(data){
                this.uploader = new SocketIOFile(socket,{
                    //file initialisation
                });
                $this.onSocketUpload(context, data);
                this.uploader.on("start", function(data){
                    $this.onSocketUploadStarted(context, data);
                });

                this.uploader.on("stream", function(data){
                    $this.onSocketUploadStreamed(context, data);
                });

                this.uploader.on("complete", function(data){
                    $this.onSocketUploadCompleted(context, data);
                });


                this.uploader.on("error", function(data){
                    $this.onSocketUploadError(context, data);
                });

                this.uploader.on("abort", function(data){
                    $this.onSocketUploadAborted(context, data);
                });
            });
            
            
            
            
            
            
            
            
            socket.on("initialise", function(data){
                if(verifyCredentials){
                    socket.join(data.userId);
                    socket.emit("initialisation/success", JSON.stringify({
                        roomId: data.userId,
                        userId: data.userId,
                        action: "initialise",
                        status: 200
                    }));
                }
                else{
                    socket.emit("initialisation/error", {
                        action: "initialise",
                        status: 401,
                        reason: "invalid credentials"
                    });
                }
            });

        });
        
        
    
        
    };
    
    
    
    verifyCredentials =function(data){
        var userId = data.userId;
        var token = data.token;
        var device = data.device;
        var app = data.app;
        ///Todo: verify app token.
        ///Todo: verify user details and device
        return true;
    };
    
    
    
}



module.exports = SocketIOPlugin;