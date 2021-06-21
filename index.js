const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const Router = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", Router); // Use the router

// Start the app
app.listen(process.env.PORT, async () =>
    console.log("App is running on: http://localhost:" + process.env.PORT)
);