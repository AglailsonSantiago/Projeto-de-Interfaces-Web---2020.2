const Post = require("../models/posts");
const Comentario = require("../models/comentarios");
const viewPost = require("../views/posts");
const viewComentario = require("../views/comentarios");

module.exports.listarPosts = function(req, res){
    let promisse = Post.find();
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
    let post = req.body;
    let promisse = Post.create(post);

    promisse.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.removerPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findByIdAndDelete(id);
    promise.then(function(){
        res.status(200).json({mensagem: "Post deletado com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    })

}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({id_post: id});
    promise.then(function(comentarios){
        res.status(200).json(viewComentario.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    })
}