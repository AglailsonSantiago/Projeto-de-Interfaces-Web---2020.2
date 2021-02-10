const controller = require("../controllers/users");
const auth = require("../controllers/auth");

module.exports = function(app){

    app.post("/users/signin", auth.logar);
    app.post("/users", controller.inserirUser)
    
    app.use("/users", auth.checar);
    app.get("/users", controller.listarUsers);
    app.get("/users/:id", controller.buscarUserPorId);
    app.get("/users/:id/posts", controller.obterPosts);
    app.delete("/users/:id", controller.removerUser);
    
}