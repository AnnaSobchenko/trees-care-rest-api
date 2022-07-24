const {
  getAllTrees,
  addAllTrees,
  getOneTree,
  updateTreePhoto,
} = require("../services/trees");

const getTrees = async (req, res, next) => {
  const allTrees = await getAllTrees();
  res.status(200).send(allTrees);
};
const getTreePhoto = async (req, res, next) => {
  console.log("req.file :>> ", req.file);

  const user = await updateTreePhoto(req.file);
  res.status(200).send(user);
};
const getOneTreeController = async (req, res, next) => {
  const { treeId } = req.params;
  const allTrees = await getOneTree(treeId);
  res.status(200).send(allTrees);
};
const addTrees = async (req, res, next) => {
  const message = await addAllTrees(req.body);
  res.status(200).send(message);
};
module.exports = {
  getTrees,
  addTrees,
  getOneTreeController,
  getTreePhoto,
};
