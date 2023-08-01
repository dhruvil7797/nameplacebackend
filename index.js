const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { sequelize } = require("./utils/database");

const app = express();

// App Configuration
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(multer({ storage: multer.memoryStorage() }).any());

// Routes
const userRoutes = require("./routes/userRoute")();
const placeRoutes = require("./routes/placeRoute")();
const visitRoutes = require("./routes/visitRoute")();
const personRoutes = require("./routes/personRoute")();

app.use(userRoutes);
app.use(placeRoutes);
app.use(visitRoutes);
app.use(personRoutes);

// Startup Script
sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.NODE_PORT, () => {
      console.log(`Listening on port ${process.env.NODE_PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

process.on("SIGINT", () => {
  console.log("Exiting application");
  process.exit();
});
