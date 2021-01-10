const controller = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/comentarios", controller.listarComentarios);
    app.get("/comentarios/:id", controller.buscarComentarioPorId);
    app.post("/comentarios", controller.inserirComentario)
    app.delete("/comentarios/:id", controller.removerComentario);
}