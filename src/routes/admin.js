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
  updateTrees,

  deleteTree,
} = require("../../controllers/trees");

router.get("/trees", catchErrors(getTrees));

router.post("/addTrees", catchErrors(addTrees));
router.get("/updateTrees", catchErrors(updateTrees));
router.get("/:treeId", catchErrors(deleteTree));

module.exports = router;
