// root/src/apps/app.js
const express = require("express");
const fileUpload = require("express-fileupload"); // New import
const carRoutes = require("../routers/carRoutes");
const errorHandler = require("../middlewares/errorHandler");

const app = express();
app.use(express.json());
app.use(fileUpload()); // Enable file upload handling
app.use("/api", carRoutes);
app.use(errorHandler);

module.exports = app;
