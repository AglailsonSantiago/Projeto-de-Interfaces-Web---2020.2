// Importando módulo express(Padrão CommonJS)
const express = require('express');
const routerUsers = require("../app/routes/users");
const routerPosts = require("../app/routes/posts");
const routerComentarios = require("../app/routes/comentarios");
const bodyParser = require("body-parser");

// Exportando módulo (Padrão CommonJS)
module.exports = function() {
    let app = express ();
    //Definindo variável de aplicação
    app.set('port', 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));

    routerUsers(app);
    routerPosts(app);
    routerComentarios(app);

    return app;
};