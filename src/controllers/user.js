const User = require('../models/user')();
const md5 = require('md5');
//senha: md5(req.body.senha + global.SALT_KEY)
let controller = {}

controller.login = (req, res) => {
    try {
        const user = req.params.user;
        const password = md5(req.body.password + global.SALT_KEY);
        User.findOne({user:user}).exec().then(
            (user) => {
                if(!user){
                    res.sendStatus(404);
                } else if( user.password == password ){
                    res.json(user).status(200).end();
                } else {
                    res.sendStatus(403);
                }
            }
        );

    } catch(e){
        res.send(500).send(e);
        throw e;
    }
}

controller.singin = (req, res) => {
    console.log(req.body);
    try{
        
        User.create({
            name: req.body.name,
            user: req.body.user,
            password: md5(req.body.password + global.SALT_KEY)
        });
        res.sendStatus(201);

    } catch(e){
        res.status(500).send(e);
        throw e;
    }
}

controller.getPlaylists = (req, res) => {
    let user = req.params.user;
    User.findOne({user:user}).exec().then(
        (user) => {
            if(user){
                res.json(user.playlists).sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        }
    );
}

controller.savePlaylist = (req, res) => {
    let _id = req.params.id;
    playlist = req.body.playlist;
    User.findOne({_id:_id}).exec().then(
        (user) => {
            if(user){
                user.playlists.push(JSON.stringify(req.body.playlist));
                User.findOneAndUpdate({_id:_id}, user).exec().then(
                    (user) => {
                        if(user){
                            res.sendStatus(200);
                        } else {
                            res.sendStatus(500);
                        }
                    },
                    (erro) => {
                        console.error(erro);
                        res.json(erro).sendStatus(400);
                    }
                );
            } else {
                res.sendStatus(404);
            }
        }
    );
}

module.exports = controller; 