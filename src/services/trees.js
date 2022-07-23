const { Trees } = require("../db/treesModel");

const getAllTrees = async () => {
  const result = await Trees.find({});
  return result;
};
const addAllTrees = async () => {
  const result = await Trees.find({});
  return result;
};
const updateAllTrees = async () => {
  const result = await Trees.find({});
  return result;
};
const deleteOneTree = async () => {
  const result = await Trees.find({});
  return result;
};
module.exports = {
  getAllTrees,
  addAllTrees,
  updateAllTrees,
  deleteOneTree,
};
