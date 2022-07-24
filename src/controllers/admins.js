const { getAllApproves, methodTree } = require("../services/admins");

const getAllApprovesController = async (req, res, next) => {
  const allApproves = await getAllApproves();
  res.status(200).send(allApproves);
};
const methodTreeController = async (req, res, next) => {
  const message = await methodTree(req.body);
  res.status(200).send(message);
};

module.exports = {
  getAllApprovesController,
  methodTreeController,
};
