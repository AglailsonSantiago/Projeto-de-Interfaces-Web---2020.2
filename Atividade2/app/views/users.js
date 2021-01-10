function render(user){
    return{
        id : user._id,
        nome : user.nome,
        email : user.email,
        senha : user.senha,
    }
}

module.exports.render = render;

function renderMany(users){
    return users.map(render);
}

module.exports.renderMany = renderMany;