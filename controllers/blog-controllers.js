// requirements
const Blog = require("../models/Blog");

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

  Blog.findById(id, (blog) => {
    const error = { message: "Not Found" };

    if (!blog) {
      return response.render("error", {
        pageTitle: error.Title,
        path: "*",
        error,
      });
    }

    response.render("blog-detail", {
      pageTitle: blog.title,
      path: "/blogs",
      blog,
    });
  });
};
