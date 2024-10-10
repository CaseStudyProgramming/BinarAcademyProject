// root/netlify/functions/carHandler.js
require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const fileUpload = require("express-fileupload");

const carRoutes = require("../../src/routers/carRoutes");
const errorHandler = require("../../src/middlewares/errorHandler");

const app = express();
app.use(express.json());
app.use(fileUpload());

// Menggunakan rute yang sudah dibuat
app.use("//api", carRoutes);
app.use(errorHandler);

module.exports.handler = serverless(app);
