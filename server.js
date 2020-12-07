require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true, useNewUrlParser: true  }));
app.use(express.json());



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernPassportAuthentication");


app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
})
