// requirements
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

exports.postComment = (request, response) => {
  const { username, content } = request.body;
  const { id: blogId } = request.params;
  const comment = new Comment(username, content, blogId);
  console.log("blog id - " + blogId);
  comment.save();
  response.redirect("/");
};
