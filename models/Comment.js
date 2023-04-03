// requirements
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");
const Blog = require("../models/Blog.js");

const blogsDataPath = path.join(__dirname, "..", "data", "blogs.json");
const commentsDataPath = path.join(__dirname, "..", "data", "comments.json");

const getCommentsFromFile = (cb) => {
  fs.readFile(commentsDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Comment {
  constructor(username, comment, blogId) {
    this.username = username;
    this.comment = comment;
    this.blogId = blogId;
  }

  save() {
    getCommentsFromFile((comments) => {
      comments.push(this);
      fs.writeFile(commentsDataPath, JSON.stringify(comments), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(id, cb) {
    getCommentsFromFile((comments) => {
      const comment = comments.find((comment) => comment.id === id);
      cb(comments);
    });
  }
};
