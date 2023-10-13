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
      required: [true, "Email field must be rewuired."],
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    firstName: String,
    lastName: String,
  },
  {
    collection: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
