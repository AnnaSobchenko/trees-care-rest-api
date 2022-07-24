const { ApproveTrees } = require("../db/treesModel");
const { Trees } = require("../db/approveModel");
const uuid = require("uuid");
const fs = require("fs");
// const dir = "../../tmp";
const files = fs.readdirSync("../../tmp");

const getAllTrees = async () => {
  const result = await Trees.find({});
  return result;
};
const getOneTree = async (_id) => {
  console.log("_id", _id);
  const result = await Trees.find({ _id });
  return result;
};

const updateTreePhoto = async (token, body) => {
  const { path, filename } = body;
  const newFile = await Jimp.read(path);
  const newPath = "./public/images/" + filename;
  await newFile.resize(300, 300).writeAsync(newPath);
  await fs.unlink(path);

  const user = await ApproveTrees.findOneAndUpdate(
    { token },
    { photoURL: newPath },
    { new: true }
  );

  return user;
};

const addAllTrees = async (body) => {
  const registrationNumber = uuid.v4();
  console.log("registrationNumber :>> ", registrationNumber);

  // const patn = path.join(__dirname, "../../tmp");
  // const filename = path.join(__filename, "../../tmp");

  // console.log("patn :>> ", patn);
  // console.log("object :>> ", filename);

  // { photoURL: newPath }
  console.log("files :>> ", files);
  const newFile = await Jimp.read(path);
  const newPath = "./public/images/" + files;

  await newFile.resize(300, 300).writeAsync(newPath);
  await fs.unlink(path);

  console.log("newPath :>> ", newPath);

  const data = { ...body, trees: { ...body.trees, registrationNumber } };
  await ApproveTrees.create(data);
  return "the tree's information send for base";
};

module.exports = {
  getAllTrees,
  addAllTrees,
  getOneTree,
  updateTreePhoto,
};
