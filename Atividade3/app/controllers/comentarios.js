const Comentario = require("../models/comentarios");
const view = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.listarComentarios = function(req, res){
    let promisse = Comentario.find().exec();
    promisse.then(function(comentarios){
        res.status(200).json(view.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem:"Requisição falhou!"})
    })
}

module.exports.buscarComentarioPorId = function(req, res){
    let id = req.params.id;
    let promisse = Comentario.findById(id).exec();
    promisse.then(function(comentario){
        res.status(200).json(view.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Comentário não encontrado!"});
    });
}

module.exports.inserirComentario = function(req, res){
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_user_logado = paypload.id;

    let promisse = Comentario.create({texto: req.body.texto, id_post: req.body.id_post, id_usuario: id_user_logado});

    promisse.then(function(comentario){
        res.status(201).json(view.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_user_logado = paypload.id;

    let promisse = Comentario.findOneAndDelete({_id: id, id_usuario: id_user_logado});
    promisse.then(function(comentario){
       if(comentario == null){
        res.status(400).json({mensagem: "Erro!"});
       } else{
           res.status(200).json({mensagem: "Comentário deletado!"});
       }
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    })
}
