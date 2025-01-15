const loginModel = require("../model/login");


const signup = async (req, res) => {
  console.log("new signup request")
  try {
   
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(500).json({ message: "email and password both are required" });
    }
     
      const newUser = new loginModel({ email, password });
      await newUser.save();
      res.status(201).json({ message: "new user created sucessfully " })
    }catch (err) {
    res.status(500).json({ error: err })
  }
}

module.exports = signup