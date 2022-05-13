const express = require("express");
const ToDoTask = require("../models/ToDoAppSchema");
const router = express.Router();

//GETS ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await ToDoTask.find();
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMITS A TASK
router.post("/", async (req, res) => {
  //co robi async?
  const todoTask = new ToDoTask({
    content: req.body.content,
  });

  try {
    //co robi try?
    const savedTask = await todoTask.save(); //co robi await?
    res.json(savedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC TASK// jak działa dynamic parameter?
router.get("/:taskId", async (req, res) => {
  try {
    const task = await ToDoTask.findById(req.params.taskId);
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPECIFIC TASK
router.delete("/:taskId", async (req, res) => {
  try {
    const removedTask = await ToDoTask.deleteOne({ _id: req.params.taskId });
    res.json(removedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE SPECIFIC TASK
router.patch("/:taskId", async (req, res) => {
  try {
    const editedTask = await ToDoTask.updateOne(
      { _id: req.params.taskId },
      { $set: { content: req.body.content } }
    );
    res.json(editedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
