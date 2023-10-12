"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/*-------------------------------------------------------*/

app.use(express.json());

//Connect to MongoDB - Mongoose
require("./src/dbConnection");

//Home Page
app.all("/", (req, res) => {
  res.send("Welcome to Blog API");
});

// Route
app.use("/blog", require("./src/routes/blogRoute"));

/*--------------------------------------------------------*/

app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
