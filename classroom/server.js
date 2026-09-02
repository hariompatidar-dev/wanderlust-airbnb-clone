const express = require("express");
const app = express();
// const users = require("./routes/users.js");
// const posts = require("./routes/posts.js");
const session = require("express-session");
const flash = require("connect-flash");
const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/test", (req, res) => {
  res.send("test successful");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
