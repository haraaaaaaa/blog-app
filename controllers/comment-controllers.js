// Requirements
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

exports.postComment = (request, response) => {
  const { username, content } = request.body;
  const { id: blogId } = request.params;
  const comment = new Comment(username, content, blogId);

  if (comment.username.length === 0 || comment.content.length === 0) {
    const error = { title: "Error 400", message: "Bad Request" };
    response.render("error", { pageTitle: error.title, path: "*", error });
  } else {
    comment.save();
    response.redirect("/");
  }
};
