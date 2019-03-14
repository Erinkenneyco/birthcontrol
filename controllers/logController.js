const db = require("../models");

module.exports = {
    
    findAll: function(req, res) {
        db.Log.find(req.query)
        .then(dbLog => res.json(dbLog))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Log.findById(req.params.id)
        .then(dbLog => res.json(dbLog))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Log.create(req.body)
        .then(dbLog => res.json(dbLog))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Log.findOneAndUpdate({id: req.params.id}, req.body)
        .then(dbLog => res.json(dbLog))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Log.findById(req.params.id)
        .then(dbLog => dbLog.remove())
        .then(dbLog => res.json(dbLog))
        .catch(err => res.status(422).json(err));
    }
};