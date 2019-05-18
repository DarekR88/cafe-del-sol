const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.Colors
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            })
    },
    update: function (req, res) {
        db.Colors
            .findOneAndUpdate({ title: "Seasonal" }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Colors
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}