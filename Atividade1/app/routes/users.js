const controller = require("../controllers/users");

module.exports = function(app){
    app.get("/users", controller.listarUsers);
}