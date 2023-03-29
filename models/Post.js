// requirements
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

const postsDataPath = path.join(__dirname, "..", "data", "posts.json");

const getPostsFromFile = (cb) => {
  fs.readFile(postsDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Post {
  constructor(title, content, id) {
    this.id = v4();
    this.title = title;
    this.content = content;
  }

  save() {
    getPostsFromFile((posts) => {
      posts.push(this);
      fs.writeFile(postsDataPath, JSON.stringify(posts), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPostsFromFile(cb);
  }

  static findById(cb, id) {
    getPostsFromFile((products) => {
      const post = posts.find((post) => post.id === id);
      cb(post);
    });
  }
};
