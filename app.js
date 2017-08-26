require("dotenv").config({ path: "./config/env/.env" });
import express from 'express';
const path = require('path');

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
