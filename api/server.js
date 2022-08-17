if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
const app = express();
const routes = require("./routes");
const { CORS_URL } = process.env;

const cookieParser = require("cookie-parser");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
});

app.use("/api", routes);

const { PORT } = process.env;

db.sync({ force: false })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    })
  )
  .catch((error) => console.log("Sync Error:", error));
