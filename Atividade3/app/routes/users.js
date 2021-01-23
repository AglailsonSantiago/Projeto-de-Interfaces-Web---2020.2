const controller = require("../controllers/users");

module.exports = function(app){

    app.get("/users", controller.listarUsers);
    app.get("/users/:id", controller.buscarUserPorId);
    app.get("/users/:id/posts", controller.obterPosts);
    
    app.post("/users", controller.inserirUser)
    
    app.delete("/users/:id", controller.removerUser);
    
}