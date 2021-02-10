const Usuario = require("../models/users");
const Post = require("../models/posts");
const userView = require("../views/users");
const postsView = require("../views/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.listarUsers = function(req, res){
    let promisse = Usuario.find().exec();
    promisse.then(function(users){
        res.status(200).json(userView.renderMany(users));
    }).catch(function(error){
        res.status(500).json({mensagem:"Requisição falhou!"})
    })
}

module.exports.buscarUserPorId = function(req, res){
    let id = req.params.id;
    let promisse = Usuario.findById(id).exec();
    promisse.then(function(user){
        res.status(200).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Usuário não encontrado!"});
    });
}

module.exports.inserirUser = function(req, res){
    let user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
    let promisse = Usuario.create(user);

    promisse.then(function(user){
        res.status(201).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.removerUser = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_user_logado = paypload.id;

    if(id != id_user_logado){
        res.status(400).json({mensagem: "erro, sem permissão!"});
    } else{

        let promisse = Usuario.findByIdAndDelete(id_user_logado);
        promisse.then(function(){

            res.status(200).json({mensagem: "deletado!"});
            
        }).catch(function(error){
            res.status(400).json({mensagem: "erro!"});
        })
    }
}

module.exports.obterPosts = function(req, res){
    let id = req.params.id;
    let promise = Post.find({id_usuario:id});
    promise.then(function(posts){
        res.status(200).json(postsView.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    });
}