//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const homeStartingContent =
  "Hi, so I am Balaji. I am from Chennai, India. Well I am a full stack web developer and trying out other technologies like ML & CV. I started doing competetive coding for cracking interviews and started loving it. And some of my hobbies are playing chess and watching movies. Well if you found this blog, you are awesome.I plan to keep on updating this blog with my knowledge and experience.I hope you enjoy my blog.";
const aboutContent =
  "This site was built using ExpressJS and NodeJS and MongoDB is used to store the data in the backend. This site was initially built for learning NodeJS and Express JS in detailed. This includes handling routes inside app.js and creating a custom url for posts. This site is still in progress and I am working on adding more features and functionality. Pagination and search is the latest added feature. I am also working on adding a login system and a user profile page. Other features like edit and delete are yet to be added.";
const contactContent =
  "So if you want to contact me, you can email me at balajisankar@gmail.com. I am also on LinkedIn and GitHub and I have left the links for them below. Most of my other coding profiles could be found under the handle balaji305. There's an interesting story about the number 418. Many wondered if it was my birthday but it wasn't. It just shows that I am a tea guy. It's actually an HTTP status code indicating that the server refuses to brew coffee because it's, permanently a tea pot. I also needed a unique username that has my name and something short to remember. And hence my username. If you have read this, you are just the best. Have a good day and I hope we can connect soon. Ciao!";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/blogDBs", {
  useNewUrlParser: true,
});

const postSchema = {
  title: String,
  content: String,
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts,
    });
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  post.save(function (err) {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId }, function (err, post) {
    res.render("post", {
      title: post.title,
      content: post.content,
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
