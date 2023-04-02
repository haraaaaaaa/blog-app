// requirements
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const { comment } = require("../controllers/comment-controllers");

exports.getBlogs = (request, response) => {
  Blog.fetchAll((blogs) => {
    response.render("home", {
      pageTitle: "Blog",
      path: "/blogs",
      blogs,
    });
  });
};

exports.getBlog = (request, response) => {
  var { id } = request.params;

  Blog.findById(id, (blog) => {
    const error = { message: "Not Found" };

    Comment.findById(id, (comments) => {
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
        comments,
      });
    });
  });
};
