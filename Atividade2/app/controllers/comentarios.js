const Comentario = require("../models/comentarios");
const view = require("../views/comentarios");

let comentarios = [];

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
    let comentario = req.body;
    let promisse = Comentario.create(comentario);

    promisse.then(function(comentario){
        res.status(201).json(view.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;
    let promisse = Comentario.findByIdAndDelete(id);
    promisse.then(function(){
        res.status(200).json({mensagem: "Comentário deletado com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    })
}
