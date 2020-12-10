const Router = require("express").Router();
const db = require("../models");


Router.get("/welcome", (req, res) => {
  res.json({ message: "You have gone full MERN!!!"});
})

Router.get("/parks", (req, res) => {
  axios.get(req.url).then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
})

Router.post("/User", async (req, res) => {
  const user = await db.User.create(req.body)
  res.json(user)
})

module.exports = Router;