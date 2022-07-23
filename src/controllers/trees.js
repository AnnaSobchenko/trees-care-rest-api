const {
  getAllTrees,
  addAllTrees,
  updateAllTrees,
  deleteOneTree,
} = require("../services/trees");

const getTrees = async (req, res, next) => {
  const allTrees = await getAllTrees();
  res.status(200).send(allTrees);
};
const addTrees = async (req, res, next) => {
  const addedTrees = await addAllTrees(req.body);
  res.status(200).send(addedTrees);
};
const updateTrees = async (req, res, next) => {
  const allTrees = await updateAllTrees();
  res.status(200).send(allTrees);
};
const deleteTree = async (req, res, next) => {
  const allTrees = await deleteOneTree();
  res.status(200).send(allTrees);
};
module.exports = { getTrees, addTrees, deleteTree, updateTrees };
