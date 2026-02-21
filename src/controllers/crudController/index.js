const crudMethods = require("./crudMethods");
const mongoose = require("mongoose");

exports.crudControllers = (modelName) => {
  const Model = mongoose.model(modelName);
  const methods = {};

  methods.create = async (req, res) => {
    crudMethods.create(Model, req, res);
  };

  return methods;
};
