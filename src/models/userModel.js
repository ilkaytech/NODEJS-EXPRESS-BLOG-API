"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email field must be required."],
      walidate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect.",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => "password + '*123",
    },
    firstName: String,
    lastName: String,
  },
  {
    collection: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema, "User");
