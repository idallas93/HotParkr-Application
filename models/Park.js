const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  parkName: { type: String, required: true },
  hasPoopBags: { type: Boolean },
  // rating: { type: Number },
  groundType: { type: String },
  address: { type: String, required: true  },
  reviews: [],
  ratings: { type: Array }
}, {toJSON: {virtuals: true}});

parkSchema.virtual("rating").get(function () {
  return (this.ratings.reduce((total, rating) => {
    return total + rating;
  }, 0)) / this.ratings.length;
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
