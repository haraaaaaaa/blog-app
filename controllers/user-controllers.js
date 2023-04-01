// requirements
const path = require("path");
const fs = require("fs");
const Blog = require("../models/Blog");

const blogsDataPath = path.join(__dirname, "..", "data", "blogs.json");

exports.getPostBlog = (request, response) => {
  response.render("post-blog", {
    pageTitle: "Post a New Blog",
    path: "/user/post-blog",
  });
};

exports.postPostBlog = (request, response) => {
  const { title, content } = request.body;
  const blog = new Blog(title, content);
  Blog.save();
  response.redirect("/");
};
