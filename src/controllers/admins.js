const { getAllApproves, addTree, updateTree } = require("../services/admins");

const getAllApprovesController = async (req, res, next) => {
  const allApproves = await getAllApproves();
  res.status(200).send(allApproves);
};
const addTreeController = async (req, res, next) => {
  const tree = await addTree(req.body);
  res.status(200).send(tree);
};
const updateTreeController = async (req, res, next) => {
  const tree = await updateTree(req.body);
  res.status(200).send(tree);
};
const deleteTreeController = async (req, res, next) => {
  const tree = await deleteTree(req.body);
  res.sendStatus(204).send(tree);
};
module.exports = {
  getAllApprovesController,
  addTreeController,
  deleteTreeController,
  updateTreeController,
};
