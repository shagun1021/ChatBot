const express = require("express")
const Msg = require('../controller/conver');
const signup = require("../controller/signup");
const login = require("../controller/login");
const verifyToken = require("../middleware/authMiddleware");
const postRoute = express.Router()

postRoute.post("/post", verifyToken, Msg.newMsg)
postRoute.post("/signup", signup)
postRoute.post("/login", login)
postRoute.get("/sessions", verifyToken, Msg.getAllSession)


module.exports = postRoute