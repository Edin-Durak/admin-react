const express = require("express");
const router = express.Router();
const vrstaSJController = require("../controllers/vrstaSJController");

router.get("/", vrstaSJController.getAll);
router.get("/:id", vrstaSJController.getById);
router.post("/", vrstaSJController.create);
router.put("/:id", vrstaSJController.update);
router.delete("/:id", vrstaSJController.delete);

module.exports = router;
