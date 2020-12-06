const Router = require("express").Router();
const { request } = require("http");
const jwt =  require("jsonwebtoken");
const passport = require("passport")

Router.post("/login", (req, res, next) => {
    passport.authenticate("local", {session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: "Something isn't right",
                user: user 
            })
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET);
            const { email } = user;
            return res.json({ email, token })
        });
    }) (req, res, next)
});

module.exports = Router; 