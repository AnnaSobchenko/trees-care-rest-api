const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catch-errors");
const {
  getTrees,
  addTrees,
  getOneTreeController,
  getTreePhoto,
} = require("../../controllers/trees");

const multer = require("multer");
const mime = require("mime-types");
const uuid = require("uuid");
// const authorize = require("../../middlewares/authorize");

const upload = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      const extname = mime.extension(file.mimetype);
      const filename = uuid.v4() + "." + extname;
      cb(null, filename);
    },
    destination: "./tmp",
  }),
});

router.get("/", catchErrors(getTrees));

router.post("/add", upload.single("photo"), catchErrors(addTrees));
router.patch(
  "/addTreePhoto",
  // authorize,
  upload.single("photo")
  // getTreePhoto
);
router.get("/:treeId", catchErrors(getOneTreeController));

module.exports = router;
