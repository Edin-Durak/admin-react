const db = require("../models");
const VrstaSJ = db.VrstaSJ;

exports.getAll = async (req, res) => {
  try {
    const vrste = await VrstaSJ.findAll();
    res.json(vrste);
  } catch (error) {
    console.error("Error in getAll:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const vrsta = await VrstaSJ.findByPk(req.params.id);
    if (!vrsta) {
      return res.status(404).json({ message: "Vrsta nije pronađena" });
    }
    res.json(vrsta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const vrsta = await VrstaSJ.create(req.body);
    res.status(201).json(vrsta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const vrsta = await VrstaSJ.findByPk(req.params.id);
    if (!vrsta) {
      return res.status(404).json({ message: "Vrsta nije pronađena" });
    }
    await vrsta.update(req.body);
    res.json(vrsta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const vrsta = await VrstaSJ.findByPk(req.params.id);
    if (!vrsta) {
      return res.status(404).json({ message: "Vrsta nije pronađena" });
    }
    await vrsta.destroy();
    res.json({ message: "Vrsta uspješno obrisana" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
