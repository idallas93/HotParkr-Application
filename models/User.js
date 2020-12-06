const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    email: {
        type: String, 
        rquired: true
    },

    password: String 
}); 

userSchema.pre(
    'save',
    async function(next) {
        const user = this; 
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;