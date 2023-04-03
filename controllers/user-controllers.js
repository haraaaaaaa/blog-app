// Requirements
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

  if (blog.title.length === 0 || blog.content.length === 0) {
    const error = { title: "Error 400", message: "Bad Request" };
    response.render("error", { pageTitle: error.title, path: "*", error });
  } else {
    blog.save();
    response.redirect("/blogs/:id");
  }
};
