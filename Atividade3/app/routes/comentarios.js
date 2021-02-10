const controller = require("../controllers/comentarios");
const auth = require("../controllers/auth");

module.exports = function(app){
    app.use("/comentarios", auth.checar);
    app.get("/comentarios", controller.listarComentarios);
    app.get("/comentarios/:id", controller.buscarComentarioPorId);
    app.post("/comentarios", controller.inserirComentario)
    app.delete("/comentarios/:id", controller.removerComentario);
}