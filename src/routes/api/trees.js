const express = require("express");
const router = express.Router();
const authorize = require("../../middlewares/authorize");
const { catchErrors } = require("../../middlewares/catch-errors");
const {
  postSignupValidation,
  postLoginValidation,
} = require("../../middlewares/validationSchema");

const {
  getTrees,
  addTrees,
  getOneTreeController,
  // updateTrees,
  // deleteTree,
} = require("../../controllers/trees");

router.get("/", catchErrors(getTrees));

router.post("/add", catchErrors(addTrees));
// router.get("/updateTrees", catchErrors(updateTrees));
router.get("/:treeId", catchErrors(getOneTreeController));

module.exports = router;
