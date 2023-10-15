"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// SessionCookies:
const session = require("cookie-session"); // ömür varsa cookie ömür yoksa session

app.use(
  session({
    secret: process.env.SECRET_KEY || "secret_keys_for_cookies",
    // name: "cookie",
    // maxAge: 1000 * 60 * 60 * 24, // 1 day (miliseconds) session
  })
);

/* ------------------------------------------------------- */

app.use(express.json());

// Connect to MongoDB with Mongoose:
require("./src/dbConnection");

// Searching&Sortin&Pagination:
app.use(require("./src/middleware/findSearchSortPage"));

// HomePage:
app.all("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

// Routes:
app.use("/user", require("./src/routes/userRoute"));
app.use("/blog", require("./src/routes/blogRoute"));

/* ------------------------------------------------------- */
// Synchronization:
// require("./src/sync")();

// errorHandler:
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
