const {ApproveTrees } = require("../db/treesModel");
const { Trees } = require("../db/approveModel");

const getAllApproves = async () => {
  const result = await ApproveTrees.find({});
  return result;
};

const methodTree = async (body) => {  
  console.log('body', body)
  const { trees, method, _id } = body;
const {
        // id=_id,
        radius,
        age,
        kindOfTree,
        condition,
        necessaryWorks,
        location,
        registrationNumber,
        image,
      } = trees;
      console.log('method', method)
      console.log('trees', trees)
      
  switch (method) {
    case "add":
      console.log('first add')
      const result = await Trees.create(trees);
      console.log('result', result)
      break;

    case "update":
      console.log('_id', _id)
      const id=trees._id
      console.log('trees_id',id)
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
        const idDel=trees._id
        await Trees.findOneAndDelete({ idDel });
        break;
  }
  await ApproveTrees.findOneAndDelete({ _id });
  return "Operation success";
};

module.exports = {
  getAllApproves,
  methodTree
};
