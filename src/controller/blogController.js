"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Catch async-errors and send to errorHandler:
require("express-async-errors");

const { query } = require("express");
// Call Models:
const { BlogCategory, BlogPost } = require("../models/blogModel");

//---------------------
// BlogCategory
//---------------------

module.exports.BlogCategory = {
  list: async (req, res) => {
    // const data = await BlogCategory.find();
    const data = await req.getModelList(blogCategory);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogCategory.findOne({
      _id: req.params.categoryId,
    });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);

    // res.status(200).send({
    //   error: false,
    //   body: req.body,
    //   result: data,
    //   newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    // });
  },
};

//---------------------
// BlogPost
//---------------------

module.exports.BlogPost = {
  list: async (req, res) => {
    /*

    // SEARCHİNG: URL?search[key1]=value1&search[key2]=value2

    const search = req.query?.search || {};
    // console.log(search);
    for (let key in search)
      search[key] = { $regex: search[key], $options: "i" };

    // SORTING: URL?sort[key1]=1&sort[key2]=-1 (1= ASC, -1= DESC)
    const sort = req.query?.sort || {};

    // PAGINATİON: URL?page=1&limit=10

    // const limit = req.query?.limit || 20;
    let limit = Number(req.query?.limit);
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);
    // console.log("limit", typeof limit, limit);

    let page = Number(req.query?.page);
    page = (page > 0 ? page : 1) - 1;
    // console.log("page", typeof page, page);

    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : page * limit;
    // console.log("skip", typeof skip, skip);
    

    const data = await BlogPost.find(search).sort({ title: 1, content: -1 });

    // RUN:
    const data = await BlogPost.find(search)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate("blogCategoryId");
*/
    const data = await req.getModelList(BlogPost, "blogCategoryId");

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  listInCategory: async (req, res) => {
    const data = await BlogPost.find({
      blogCategoryId: req.params.categoryId,
    }).populate("blogCategoryId");

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate(
      "blogCategoryId"
    );

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);

    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);

    // res.status(200).send({
    //   error: false,
    //   body: req.body,
    //   result: data,
    //   newData: await BlogPost.findOne({ _id: req.params.postId }),
    // });
  },
};
