const { Trees, ApproveTrees } = require("../db/treesModel");
const uuid = require("uuid");

const getAllTrees = async () => {
  const result = await Trees.find();
  return result;
};
const addAllTrees = async (body) => {
  const { radius, age, kindOfTree, condition, necessaryWorks } = body;

  const registrationNumber = uuid.v4();

  const result = await ApproveTrees.create({
    radius,
    age,
    kindOfTree,
    condition,
    registrationNumber,
    necessaryWorks,
  });
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
