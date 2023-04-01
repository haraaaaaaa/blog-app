// requirements
const path = require("path");
const fs = require("fs");
const Blog = require("../models/Blog");

const blogsDataPath = path.join(__dirname, "..", "data", "blogs.json");

exports.getBlogs = (request, response) => {
  Blog.fetchAll((blogs) => {
    response.render("home", {
      pageTitle: "Blog",
      path: "/blogs",
      blogs: blogs,
    });
  });
};

exports.getBlog = (request, response) => {
  const { id } = request.params;

  Blog.findById(id, (post) => {
    const error = { message: "Not Found" };

    if (!blog) {
      return response.render("error", {
        pageTitle: error.Title,
        path: "*",
        error,
      });
    }

    response.render("blog", {
      pageTitle: blog.title,
      path: "/blogs",
      blog,
    });
  });
};
