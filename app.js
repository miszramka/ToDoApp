const express = require("express"); // 1.imported express package
const app = express(); // 2. executed express package
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config"); //dlaczego config?
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Middlewares // zapytac Wojtka - do czego to?
// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

//ROUTES
app.get("/", (req, res) => {
  //res - response to the user
  res.send("Welcome to ToDo app");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("connected to DB") //jak to zrobic uzywajac compass?
);

app.listen(3000);
