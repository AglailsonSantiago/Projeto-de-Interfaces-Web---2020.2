module.exports.listarUsers = function(req, res){
    res.json([
        {nome: "Aglailson", email: "aglailson@alu.ufc.br", senha: "123"},
        {nome: "Santiago", email: "santiago@alu.ufc.br", senha: "321"},
    ]);
}