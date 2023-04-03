// Requirements
const express = require("express");
const path = require("path");
const blogRoutes = require("./routes/blog.routes");
const userRoutes = require("./routes/user.routes");
const commentRoutes = require("./routes/comment.routes");
const errorControllers = require("./controllers/error-controllers");

// Server Setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routing
app.use(blogRoutes);
app.use(userRoutes);
app.use(commentRoutes);

app.get("*", errorControllers.get404);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
