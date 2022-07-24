const { getAllApproves, methodTree } = require("../services/admins");

const getAllApprovesController = async (req, res, next) => {
  const allApproves = await getAllApproves();
  res.status(200).send(allApproves);
};
const methodTreeController = async (req, res, next) => {
  console.log('req.body controller', req.body)
  const message = await methodTree(req.body);
  res.status(200).send(message);
};
// const addTreeController = async (req, res, next) => {
//   const tree = await addTree(req.body);
//   res.status(200).send(tree);
// };
// const updateTreeController = async (req, res, next) => {
//   const tree = await updateTree(req.body);
//   res.status(200).send(tree);
// };
// const deleteTreeController = async (req, res, next) => {
//   const tree = await deleteTree(req.params._id);
//   res.sendStatus(204).send(tree);
// };
module.exports = {
  getAllApprovesController,
  methodTreeController,
  // addTreeController,
  // deleteTreeController,
  // updateTreeController,
};
