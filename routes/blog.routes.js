// requirements
const express = require("express");
const router = express.Router();

const { getBlog, getBlogs } = require("../controllers/blog-controllers");

router.get("/", (request, response) => response.redirect("/blogs"));

router.get("/blogs", getBlogs);

router.get("/blogs/:id", getBlog);

module.exports = router;
