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

const corsOptions = {
  origin: ["http://localhost:3000", "https://"],
  credentials: true,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
// });

app.use("/api", routes);

const { PORT } = process.env || 5000;

(async () => {
  try {
    await db.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect:", error.message);
  }
})();
