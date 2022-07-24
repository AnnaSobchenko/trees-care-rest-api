const {ApproveTrees } = require("../db/treesModel");
const { Trees } = require("../db/approveModel");
const uuid = require("uuid");

const getAllTrees = async () => {
  const result = await Trees.find({});
  return result;
};
const getOneTree = async (_id) => {
  console.log('_id', _id)
  const result = await Trees.find({_id});
  return result;
};
const addAllTrees = async (body) => {
  const registrationNumber = uuid.v4();  
  const data={...body,trees: {...body.trees,registrationNumber}}
   await ApproveTrees.create(data);
  return "the tree's information send for base";
};

module.exports = {
  getAllTrees,
  addAllTrees,
  getOneTree
};
