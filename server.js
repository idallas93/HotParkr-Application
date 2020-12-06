require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("./authentication/passport");
const authRoutes = require("./authentication/authRoutes");
const db = require("./models")


const app = express(); 

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.use(passport.initialize());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernPassportAuthentication")
app.use("/auth", authRoutes)

app.post("/api/user", async (req, res) => {
    const user = await db.User.create(req.body)
    res.json(user)
})
app.get("/api/welcome", (req, res) => {
    res.json({ message: "You have gone full MERN!!!"});
})


app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost${PORT}`)
})