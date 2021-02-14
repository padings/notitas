const db = require("../database/models/index")

module.exports = {
    index: function(req,res){
        db.Nota.findAll()
        .then(function(notas){
            res.render("index", {notas: notas})
         })
    },
    create: function(req,res){
        db.Nota.create({
            titulo: req.body.title,
            texto: req.body.description
        }).then(function(){
            res.redirect("/")
         }).catch(function(e){
            res.send(e)
        })
    },
    detail: function(req,res){
        db.Nota.findByPk(req.params.id)
            .then(function(nota){
            res.render("../views/detail", {nota})
        })
        
    },
    saveEdit: function(req,res){
        db.Nota.update({
            titulo: req.body.title,
            texto: req.body.message
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(notaNueva) {
            res.redirect("/")
        }).catch(function(e){
            res.send(e)
        })
    },
    delete: function(req,res){
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(borrada) {
            res.redirect("/")
        })
        .catch(function(e) {
            return res.send(e)
        })
 }
}