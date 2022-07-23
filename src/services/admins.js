const { Trees, ApproveTrees } = require("../db/treesModel");

const getAllApproves = async () => {
  const result = await ApproveTrees.find({});
  return result;
};

const addTree = async (body) => {
  const {
    radius,
    age,
    kindOfTree,
    condition,
    registrationNumber,
    necessaryWorks,
    location,
  } = body;

  const result = await Trees.create({
    radius,
    age,
    kindOfTree,
    condition,
    registrationNumber,
    necessaryWorks,
    location,
  });
  await ApproveTrees.findOneAndDelete({ _id });
  return result;
};

const updateTree = async (body) => {
  console.log('body', body)
  const {
    _id,
    radius,
    age,
    kindOfTree,
    condition,
    registrationNumber,
    necessaryWorks,
    location
  } = body;
  const result = await Trees.findOneAndUpdate(
    { _id },
    {
      radius,
      age,
      kindOfTree,
      condition,
      necessaryWorks,
      registrationNumber,
      location
    }
  );
  await ApproveTrees.findOneAndDelete({ _id });
  return result;
};
const deleteTree = async ({ _id }) => {
  const result = await Trees.findOneAndDelete({ _id });
  await ApproveTrees.findOneAndDelete({ _id });

  return result;
};
module.exports = {
  getAllApproves,
  addTree,
  updateTree,
  deleteTree,
};
