// requirements
const path = require("path");
const fs = require("fs");
const Post = require("../models/Post");

const postsDataPath = path.join(__dirname, "..", "data", "posts.json");

exports.getPosts = (request, response) => {
  Post.fetchAll((products) => {
    response.render("home", {
      pageTitle: "Blog",
      path: "/blog",
      posts: posts,
    });
  });
};

exports.getPost = (request, response) => {
  const { id } = request.params;

  Post.findById(id, (post) => {
    const error = { message: "Not Found" };

    if (!post) {
      return response.render("error", {
        pageTitle: error.Title,
        path: "*",
        error,
      });
    }

    response.render("post", {
      pageTitle: post.title,
      path: "/blog",
      post,
    });
  });
};
