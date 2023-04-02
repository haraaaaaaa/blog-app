// requirements
const Blog = require("../models/Blog");

exports.getPostBlog = (request, response) => {
  response.render("post-blog", {
    pageTitle: "Post a New Blog",
    path: "/user/post-blog",
  });
};

exports.postPostBlog = (request, response) => {
  const { title, content } = request.body;
  const blog = new Blog(title, content);
  blog.save();
  response.redirect("/");
};
