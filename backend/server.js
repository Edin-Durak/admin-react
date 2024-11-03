const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

// Dodajte ovo prije sync
db.sequelize
  .getQueryInterface()
  .showAllSchemas()
  .then((tableObj) => {
    console.log("=== Tables in database ===");
    console.log(tableObj);
  });

// Sync database with force: true
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log(
      "Database & tables created! All existing data has been deleted."
    );
    // Dodajte ovo nakon sync
    return db.sequelize.getQueryInterface().describeTable("broj_sj");
  })
  .then((tableDefinition) => {
    console.log("=== broj_sj table structure ===");
    console.log(tableDefinition);
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Routes
app.use("/api/vrstasj", require("./routes/vrstaSJRoutes"));
app.use("/api/brojsj", require("./routes/brojSJRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
