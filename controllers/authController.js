/** @format */

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    const error = new Error("Please provide a username and password");
    error.statusCode = 400;
    throw error;
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created", token });
  res.status(200).json({ test: "ok" });
};

const loginUser = async (req, res) => {
    
  res.status(200).json({ test: "ok" });
};

const authHome = async (req, res) => {
  res.status(200).json({ mg: "no resource here" });
};

module.exports = {
  registerUser,
  loginUser,
  authHome,
};
