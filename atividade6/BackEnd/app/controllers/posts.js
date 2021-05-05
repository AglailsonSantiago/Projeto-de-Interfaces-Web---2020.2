const Post = require("../models/posts");
const Comentario = require("../models/comentarios");
const viewPost = require("../views/posts");
const viewComentario = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.listarPosts = function(req, res){
    let promisse = Post.find().populate("id_usuario");
    promisse.then(function(posts){
        res.status(200).json(viewPost.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem:"Requisição falhou!"})
    })
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let promisse = Post.findById(id).exec();
    promisse.then(function(post){
        res.status(200).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Comentário não encontrado!"});
    });
}

module.exports.inserirPost = function(req, res){
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_user_logado = paypload.id;

    let promisse = Post.create({texto: req.body.texto, likes: req.body.likes, id_usuario: id_user_logado});

    promisse.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.removerPost = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_user_logado = paypload.id;

    let promise = Post.findOneAndDelete({_id: id, id_usuario: id_user_logado});
    promise.then(function(post){
        if(post == null){
            res.status(400).json({mensagem: "Erro!"});    
        } else{
            res.status(200).json({mensagem: "Post deletado com sucesso!"});
        }
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    })

}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({id_post: id}).populate("id_usuario").exec();
    promise.then(function(comentarios){
        res.status(200).json(viewComentario.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    })
}