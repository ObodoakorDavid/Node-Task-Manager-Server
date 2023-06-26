/** @format */

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err) {
    console.log(err.message);
    console.log(err.statusCode);
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.json(500).send("Something went wrong, try again later");
};

module.exports = errorHandlerMiddleware;
