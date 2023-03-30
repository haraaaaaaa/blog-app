// requirements
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");
const Post = require("../models/Post");

const postsDataPath = path.join(__dirname, "..", "data", "posts.json");
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
  constructor(username, comment, postId) {
    this.username = username;
    this.comment = comment;
    this.postId = postId;
  }

  save() {
    getCommentsFromFile((comments) => {
      comments.push(this);
      fs.writeFile(commentsDataPath, JSON.stringify(comments), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getCommentsFromFile(cb);
  }
};
