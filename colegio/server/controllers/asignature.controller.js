const Asignature = require("../models/asignature.model");

module.exports.getAllAsignature = (req, res) => {
  Asignature.find()
    .then(allAsignature => res.json({ asignature: allAsignature }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createAsignature = (req, res) => {
  Asignature.create(req.body)
    .then(newlyCreatedAsignature => res.json({ asignature: newlyCreatedAsignature }))
    .catch(err => res.status(400).json(err));
};

module.exports.getSingleAsignature = (req, res) => {
  console.log(req.params)
  Asignature.findOne({ _id: req.params.id })
    .then(oneSingleAsignature => res.json({ asignature: oneSingleAsignature }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAsignature = (req, res) => {
  Asignature.deleteOne({ _id: req.params.id })
    .then(result => res.json({ asignature: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateAsignature = (req, res) => {
  Asignature.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateAsignature => res.json({ api: updateAsignature }))
    .catch(err => res.status(400).json(err));
};

