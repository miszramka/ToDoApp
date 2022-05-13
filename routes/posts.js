const express = require("express");
const router = express.Router();
const Reminder = require("../models/ToDoAppSchema");

// router.get("/", (req, res) => {
//   //req - request
//   res.send("We are on posts");
// });

// router.get("/specific", (req, res) => {
//   //req - request
//   res.send("We are on specific post");
// });

router.post("/", async (req, res) => {
  //co robi async?
  const post = new Reminder({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save(); //co robi await?
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
