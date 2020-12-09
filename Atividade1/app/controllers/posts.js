let posts = [];

module.exports.listarPosts = function(req, res){
    let posts_retorno = posts;
    if(req.query.texto){
        let texto = req.query.texto;
        posts_retorno = posts_retorno.filter(function(post){
            return post.texto == texto;
        });
    }
    res.json(posts_retorno);
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let post = posts.find(function(post){
        return post.id == id;
    });
    if(post){
        res.json(post); 
    }
    else {
        res.status(404).json({mensagem:"Post não encontrado!"});
    }
}

module.exports.inserirPost = function(req, res){
    let post = req.body;
    posts.push(post);
    res.status(201).json(post);
}

module.exports.removerPost = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){
        return post.id != id;
    });
    res.json({mensagem: "Post apagado!"});
}