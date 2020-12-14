// dependencies
const Router = require("express").Router();
const db = require("../models");
const axios = require("axios");

Router.get("/welcome", (req, res) => {
  res.json({ message: "You have gone full MERN!!!" });
});

Router.get("/parks/:radius/:lat/:long", (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},%20${req.params.long}&radius=${req.params.radius}&type=park&keyword=dog&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  console.log(url);
  axios
    .get(url)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

Router.post("/User", async (req, res) => {
  const user = await db.User.create(req.body);
  res.json(user);
});

Router.put("/User", async (req, res) => {
  const user = await db.User.updateOne({ email: req.body.emailId }, req.body);
  res.json(user);
});

Router.post("/userInfo", async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    gender,
    preference,
    age,
    zipcode,
  } = await db.User.findOne({ email: req.body.email });
  res.json({ email, firstName, lastName, gender, preference, age, zipcode });
});

Router.post("/parkInfo", async (req, res) => {
  const park = await db.Park.findOne({ address: req.body.address });
  res.json(park);
});

Router.post("/park", async (req, res) => {
  try {
    const park = await db.Park.findOne({ address: req.body.address });
    if (park) {
      // const newRating = (park.ratings.reduce((a, b) => a + b, 3) + req.body.rating) / (park.ratings.length + 1)
      const newPark = {
        hasPoopBags: req.body.hasPoopBags,
        groundType: req.body.groundType,
        // rating: newRating,
        $push: { reviews: [req.body.review], ratings: [req.body.rating] },
        // reviews: [...park.reviews, req.body.review],
        // ratings: [ ...park.rating, req.body.rating ]
      };
      const updatePark = await db.Park.updateOne(
        { address: req.body.address },
        newPark
      );
      res.json(updatePark);
    } else {
      const newPark = await db.Park.create({
        ...req.body,
        ratings: [req.body.rating],
        reviews: [req.body.review],
      });
      res.json(newPark);
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = Router;
