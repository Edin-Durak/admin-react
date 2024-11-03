const db = require("../models");
const BrojSJ = db.BrojSJ;

exports.getAll = async (req, res) => {
  try {
    console.log("Attempting to fetch all BrojSJ...");
    const brojevi = await BrojSJ.findAll();
    console.log("Successfully fetched:", brojevi);
    res.json(brojevi);
  } catch (error) {
    console.error("Full error:", error);
    console.error("SQL Query:", error.sql);
    console.error("Error message:", error.message);
    res.status(500).json({
      message: error.message,
      sql: error.sql,
      stack: error.stack,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const broj = await BrojSJ.findByPk(req.params.id);
    if (!broj) {
      return res.status(404).json({ message: "Broj nije pronađen" });
    }
    res.json(broj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    console.log("Received create request with data:", req.body);
    const brojSJ = await BrojSJ.create(req.body);
    console.log("Created record:", brojSJ);
    res.status(201).json(brojSJ);
  } catch (error) {
    console.error("Create error:", error);
    res.status(400).json({
      message: error.message,
      details: error.errors,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const broj = await BrojSJ.findByPk(req.params.id);
    if (!broj) {
      return res.status(404).json({ message: "Broj nije pronađen" });
    }
    await broj.update(req.body);
    res.json(broj);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const broj = await BrojSJ.findByPk(req.params.id);
    if (!broj) {
      return res.status(404).json({ message: "Broj nije pronađen" });
    }
    await broj.destroy();
    res.json({ message: "Broj uspješno obrisan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
