/** @format */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3002;
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const taskRouter = require("./routes/taskRouter");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandleMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);
// app.use(cors())
app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);
app.use(errorHandleMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`DB Connected!`);
    app.listen(port, console.log(`Server Listening on port ${port} `));
  } catch (error) {
    // console.log(error);
    console.log("Can't connect");
  }
};

start();
