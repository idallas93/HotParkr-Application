const Router = require("express").Router();
const db = require("../models");
const axios = require("axios")

Router.get("/welcome", (req, res) => {
  res.json({ message: "You have gone full MERN!!!"});
})

Router.get("/parks/:radius/:lat/:long", (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},%20${req.params.long}&radius=${req.params.radius}&type=park&keyword=dog&key=${process.env.REACT_APP_GOOGLE_KEY}`
  console.log(url)
  axios.get(url).then(({data}) => {
    res.json(data)
  }).catch(err => {
    console.log(err)
  })
})

Router.post("/User", async (req, res) => {
  const user = await db.User.create(req.body)
  res.json(user)
})

module.exports = Router;