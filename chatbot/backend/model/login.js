const mongo = require("mongoose")

const loginSchema = new mongo.Schema({
  email: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true
  }
})

const loginModel = mongo.model("loginModel", loginSchema);

module.exports = loginModel