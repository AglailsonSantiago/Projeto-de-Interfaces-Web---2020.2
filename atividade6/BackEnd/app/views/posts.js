function render(post){
    return{
        id : post._id,
        texto : post.texto,
        likes : post.likes,
        nome_usuario : post.id_usuario.nome,
    }
}

module.exports.render = render;

function renderMany(posts){
    return posts.map(render);
}

module.exports.renderMany = renderMany;