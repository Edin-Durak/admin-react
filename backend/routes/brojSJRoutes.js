const express = require("express");
const router = express.Router();
const brojSJController = require("../controllers/brojSJController");

router.get("/", brojSJController.getAll);
router.get("/:id", brojSJController.getById);
router.post("/", brojSJController.create);
router.put("/:id", brojSJController.update);
router.delete("/:id", brojSJController.delete);

module.exports = router;
