const jwt = require('jsonwebtoken');
const loginModel = require('../model/login');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, 'yoyo');
    console.log(decoded, "----decoded token");

    const user = await loginModel.findById(decoded.userId);
    if (!user) {
      return res.status(401).send({ message: "Invalid token: User not found" });
    }

    req.user = user; 
    req.userId = decoded.userId; 
    next(); 
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
