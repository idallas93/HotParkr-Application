const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  parkName: { type: String, required: true },
  hasPoopBags: { type: Boolean },
  rating: { type: Number },
  groundType: { type: String },
  address: { type: String },
  reviews: [],
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
