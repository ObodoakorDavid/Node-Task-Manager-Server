const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = new Error("No Token Provided");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    // console.log(error);
    const newError = new Error("Not authorized to access this route");
    newError.statusCode = 401;
    throw newError;
  }
  next();
};

module.exports = authenticationMiddleware;