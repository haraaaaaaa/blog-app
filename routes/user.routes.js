// requirements
const express = require("express");
const router = express.Router();
const {
  getPostBlog,
  postPostBlog,
} = require("../controllers/user-controllers");

router.get("/user/post-blog", getPostBlog);

router.post("/user/post-blog", postPostBlog);

module.exports = router;
