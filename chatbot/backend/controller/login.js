const loginModel = require("../model/login");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "yoyo";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const user = await loginModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" }); 
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = login;
