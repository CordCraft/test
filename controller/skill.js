var Skill = require("../model/skill");


exports.findAll = function(req, res){
    return Skill.find({}, function(err, skills){
        if(err) {
            var response = {
                action:'get all skills',
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get all skills',
                status:'success',
                data:skills,
                dataType:'skillArr',
                code:200
            };
            res.status(200).json(response);
        }
    });
};


exports.findById = function(req, res){
    var skillId = req.params.skillId;
    Skill.findById(skillId, function(err, skill){
        if(err) {
            var response = {
                action:'get skills '+skillId,
                status:'failed',
                reason:err,
                code:500
            };
            res.status(500).json(response);
            return null;
        }
        else{
            var response = {
                action:'get skill '+skillId,
                status:'success',
                data:skill,
                dataType:'skill',
                code:200
            };
            res.status(200).json(response);
        }
    });
};

exports.findByIds = function(req, res){
    var skillIds = req.params.skillIds;
    Skill.findByIds(skillIds, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Skill.findByUserId(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Skill.findByUserIds(userIds, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Skill.findById(userId, function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityZero(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityFirst(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximitySecond(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityThird(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Skill.findById(userId, function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Skill.findByProximityZero(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Skill.findByProximityFirst(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Skill.findByProximitySecond(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Skill.findByProximityThird(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Skill.findById(userId, function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityZero(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityFirst(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximitySecond(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityThird(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Skill.findById(userId, function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityZero(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityFirst(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximitySecond(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Skill.findByProximityThird(userId, function(err, skills){
        if(err){
            
        }
        else if(!skills){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var skill = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    skill = new Skill(skill);
    skill.create(function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var skillId = req.params.skillId;
    var skill = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Skill.findOneAndUpdate(skillId, skill, function(err, skill){
        if(err){
            
        }
        else if(!skill){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var skillId = req.params.skillId;
    Skill.remove(skillId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

