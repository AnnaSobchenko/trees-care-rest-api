const { Trees } = require("../db/treesModel");

const getAllTrees = async () => {
    const result = await Trees.findOne({ email });
    return result.contacts;
  };
  module.exports ={
    getAllTrees
  }