// requirements
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

const blogsDataPath = path.join(__dirname, "..", "data", "blogs.json");

const getBlogsFromFile = (cb) => {
  fs.readFile(blogsDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Blog {
  constructor(title, content, id) {
    this.id = v4();
    this.title = title;
    this.content = content;
  }

  save() {
    getBlogsFromFile((blogs) => {
      blogs.push(this);
      fs.writeFile(blogsDataPath, JSON.stringify(blogs), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getBlogsFromFile(cb);
  }

  static findById(id, cb) {
    getBlogsFromFile((blogs) => {
      const blog = blogs.find((blog) => blog.id === id);
      cb(blog);
    });
  }
};
