const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // sex: { type: String, required: true },
  // preference: { type: String, required: true },
  // age: { type: String, required: true },
  // address: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
