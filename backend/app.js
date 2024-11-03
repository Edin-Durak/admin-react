const express = require("express");
const { sequelize } = require("./config/database");
const BrojSJ = require("./models/BrojSJ");

const app = express();

// Sync database i kreiraj tablicu
sequelize
  .sync({ force: true }) // UPOZORENJE: ovo će obrisati postojeću tablicu!
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.use("/api/brojsj", require("./routes/brojSJRoutes"));
app.use("/api/vrstasj", require("./routes/vrstaSJRoutes"));
app.use("/uploads", express.static("uploads")); // Za serviranje slika
app.use("/api/upload", require("./routes/upload"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
