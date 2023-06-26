/** @format */

const express = require("express");
const router = express.Router();

const {
  getAllTask,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/taskController");

// Alternatively
// router.route("/").get(getAllTask).post(createTask);
// router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

router.get("/", getAllTask);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
