"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema(
//   {
//     //_id: AUTO CREATED
//     fieldName: {
//       type: String,
//       default: null,
//       trim: true, // trim(data)
//       select: true, //Show/UnShow
//       index: true,
//       unique: false,
//       required: [true, "Error-Message"],
//       enum: [[0, 1, 2, 3], "Error-Message"],
//       validate: [
//         function (data) {
//           return true;
//         },
//         "Error-Message",
//       ],
//       get: function (data) {
//         return true;
//       },
//       set: function (data) {
//         return true;
//       },
//     },
//   },
//   {
//     collection: "collectionName",
//     timestamps: true, //Create and Manage 'createdAt' and 'updatedAt'
//   }
// );

//---------------------
// BlogCategory
//---------------------

const blogCatagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

//---------------------
// BlogPost
//---------------------

const blogPostSchema = new mongoose.Schema(
  {
    // _id

    userId: {
      type: mongoose.Schema.ObjectId, // Relational ObjectId
      ref: "User", // Referans Model Name
      required: true,
    },

    blogCategoryId: {
      type: mongoose.Schema.ObjectId, // Relational ObjectId
      ref: "BlogCategory", // Referans Model Name
      required: true,
    },

    title: {
      type: String,
      trim: true,
      require: true,
    },

    content: {
      type: String,
      trim: true,
      require: true,
    },

    published: {
      type: Boolean,
      default: true,
    },

    // createdAt
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

// const BlogPostModel = mongoose.model("blogPost", blogPostSchema);

module.exports = {
  BlogCategory: mongoose.model("BlogCategory", blogCatagorySchema),
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
