require("dotenv").config({ path: "./config/env/.env" });
const express = require("express");
const logger = require("morgan");

const app = express();
const db = require("./config/db/connection");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const isProduction = process.env.NODE_ENV === "production";
db.connectToDB(process.env.NODE_ENV);

if (isProduction) {
} else {
  // Enable CORS
  app.use(cors());

  /*   const options = {
    user: process.env.MLAB_USER,
    pass: process.env.MLAB_PASSWORD,
    useMongoClient: true
  };
  mongoose.connect(
    "mongodb://" + process.env.MLAB_HOST + ":" + process.env.MLAB_PORT + "/aci",
    options
  ); */
}
//Enable logging
app.use(
  logger(
    `Request Method: :method, Request URL: :url, Response Time: :response-time(ms)`
  )
);

// Secure App
app.use(helmet());

// Request Handler
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/", routes);

module.exports = app;
