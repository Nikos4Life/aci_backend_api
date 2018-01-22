require("dotenv").config({ path: "./config/env/.env" });
import express from 'express';
import path from 'path';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import db from './config/db/connection';
import cors from 'cors';

const app = express();
import routes from './routes';

const isProduction = process.env.NODE_ENV === "production";

db.connectToDB(process.env.NODE_ENV, app);

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
