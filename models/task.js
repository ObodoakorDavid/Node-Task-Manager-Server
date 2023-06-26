/** @format */

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new schema(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      maxLength: [20, "provided title is too long"],
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    tag: {
      type: String,
      enum: {
        values: ["urgent", "important"],
        message: "{VALUE} is not a valid option",
      },
      required: [true, "tag field is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
