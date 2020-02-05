var db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Member
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Member
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByGroup: function(req, res) {
        db.Member
        .find()
        .where("_groupId",req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Member
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Member
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Member
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
      





    // get: function(data, cb) {
    //     Member.find({
    //         _groupId: data._id
    //     }, cb);
    // } ,
    // save: function(data, cb) {
    //     var newMember = {
    //         _groupId: data._id,
    //         name: data.name
    //     };

    //     Member.create(newMember, function(err, doc) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log(doc);
    //             cb(doc);
    //         }
    //     });
    // },
    // delete: function(data, cb) {
    //     Member.remove({
    //         _id: data._id
    //     }, cb);
    // }
};