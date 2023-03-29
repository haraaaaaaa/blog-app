// requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

// server setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});