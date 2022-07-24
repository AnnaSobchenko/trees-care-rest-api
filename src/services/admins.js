const { ApproveTrees } = require("../db/treesModel");
const { Trees } = require("../db/approveModel");

const getAllApproves = async () => {
  const result = await ApproveTrees.find({});
  return result;
};

const methodTree = async (body) => {
  const { trees, method, _id } = body;
  const {
    radius,
    age,
    kindOfTree,
    condition,
    necessaryWorks,
    location,
    registrationNumber,
    image,
  } = trees;

  switch (method) {
    case "add":
      const result = await Trees.create(trees);
      break;

    case "update":
      const id = trees._id;
      await Trees.findOneAndUpdate(
        { registrationNumber },
        {
          radius,
          age,
          kindOfTree,
          condition,
          necessaryWorks,
          location,
          image,
        }
      );
      break;
    case "delete":
      const registrationNumberDel = trees.registrationNumber;
      await Trees.findOneAndDelete({ registrationNumberDel });
      break;
  }
  await ApproveTrees.findOneAndDelete({ _id });
  return "Operation success";
};

module.exports = {
  getAllApproves,
  methodTree,
};
