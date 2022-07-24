const express = require("express");
const router = express.Router();
const authorize = require("../../middlewares/authorize");
const { catchErrors } = require("../../middlewares/catch-errors");
const {
  postSignupValidation,
  postLoginValidation,
} = require("../../middlewares/validationSchema");

const {
  getAllApprovesController,
  addTreeController,
  updateTreeController,
  deleteTreeController,
  methodTreeController,
} = require("../../controllers/admins");

router.get("/", catchErrors(getAllApprovesController));

router.post("/", catchErrors(methodTreeController));
// router.post("/update", catchErrors(updateTreeController));
// router.delete("/:treeId", catchErrors(deleteTreeController));

module.exports = router;
