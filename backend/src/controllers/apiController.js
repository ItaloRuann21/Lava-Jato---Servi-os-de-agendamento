const user = require('../models/userModel');
const agendamento = require('../models/agendamentoModel');


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

exports.create = function(req, res, next) {
    if(validateEmail(req.body.email)){
        var query = { email: req.body.email };
        user.find(query).then(function(u) {
            if(u.length > 0){
                res.status(400).send(JSON.stringify("Usuário já existe no banco de dados"));
            }else{
                user.create(req.body).then(function(u) {
                    res.send(JSON.stringify("Usuário criado com sucesso"));
                }).catch(next);
            }
        }).catch(next);
    }else{
        res.status(400).send(JSON.stringify("Email não válido."));
    }
}

exports.login = function(req, res, next) {
    //se data atual for maior que o compo do banco da data disponivel
    //retornar mensagem que a 
    var queryEmail = { email: req.body.email };
    user.find(queryEmail).then(function(u) {
        if(u.length < 1){
            res.status(400).send(JSON.stringify("Email do usuário não encontrado"));
        }else{
            var querySenha = { email: req.body.email, senha: req.body.senha };
            user.find(querySenha).then(function(u) {
                if(u.length < 1){
                    res.status(400).send(JSON.stringify("Senha do usuário não encontrado"));
                }else{
                    res.send(JSON.stringify("Usuário logado"));
                }
            }).catch(next);
        }
    }).catch(next);
}

exports.details = function(req, res) {
    // res.send({type: 'GET'})
    user.find({}).then(function(u) {
        res.send(u);
    });
}
exports.add = function(req, res) {
    res.send({type: 'POST'});
}
exports.update = function(req, res, next) {
    // res.send({type: 'PUT'});
    user.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        user.findOne({_id: req.params.id}).then(function(u) {
            res.send(u);
        })
    }).catch(next);
}
exports.delete = function(req, res, next) {
    // res.send({type: 'DELETE'});
    user.findByIdAndRemove({_id: req.params.id}).then(function(u) {
        res.send(u);
    }).catch(next);
}


exports.createAgendamento = function(req, res, next) {
    agendamento.create(req.body).then(function(u) {
        res.send(u);
    }).catch(next);
}
exports.test = function(req, res) {
    res.send("Olá! Teste ao Controller");
}