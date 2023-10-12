"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

// .connect(process.env.MONGODB || "mongodb://localhost:27017/")
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("*DB Connected *"))
  .catch((err) => console.log(" * DB Not Connected *", err));
