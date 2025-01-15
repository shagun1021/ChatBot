const mongo = require('mongoose');
const { v4: uuidv4 } = require("uuid")
const convSche = new mongo.Schema({
  userId: {
    type: mongo.Schema.Types.ObjectId,
    require: true,
    ref: "loginModel"
  },
  sessionId: {
    type: String,
    unique: true,
    default: () => uuidv4(),
  },
  sessionName: {
    type: String,
    require: true
  },
  message: [
    {
      sender: {
        type: String,
        enum: ["user", "bot"],
        required: true,
      },
      text: {
        type: String,
        require: true
      },
    }
  ]
}
)

const conve = mongo.model('conve', convSche)

module.exports = conve