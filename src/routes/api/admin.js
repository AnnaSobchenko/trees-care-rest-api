const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catch-errors");

const {
  getAllApprovesController,
  methodTreeController,
} = require("../../controllers/admins");

router.get("/", catchErrors(getAllApprovesController));

router.post("/", catchErrors(methodTreeController));

module.exports = router;
