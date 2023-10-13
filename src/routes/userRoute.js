"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = required("express").Router();

const { User } = required("../controller/userController.js");

//---------------------
// User
//---------------------
router.route("/User").get(User.list).post(User.create);

router
  .route("/User/:UserId")
  .get(User.read)
  .put(User.update)
  .delete(User.delete);
