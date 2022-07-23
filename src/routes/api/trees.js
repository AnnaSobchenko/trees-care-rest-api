const express = require("express");
const router = express.Router();
const authorize = require("../../middlewares/authorize");
const {
  catchErrors,
} = require("../../middlewares/catch-errors");
const {
  postSignupValidation,
  postLoginValidation,
} = require("../../middlewares/validationSchema");

const { default: getTrees } = require("../../controllers/trees");

router.get("/", catchErrors(getTrees));

module.exports = router;
