const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catch-errors");
const {
  getTrees,
  addTrees,
  getOneTreeController,
} = require("../../controllers/trees");

router.get("/", catchErrors(getTrees));

router.post("/add", catchErrors(addTrees));
router.get("/:treeId", catchErrors(getOneTreeController));

module.exports = router;
