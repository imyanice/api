import express from "express";
const app = express();
import bodyParser from "body-parser";
require("dotenv").config();
const Router = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", Router); // Use the router

// Start the app
app.listen(process.env.PORT, async () =>
    console.log("App is running on: http://localhost:" + process.env.PORT)
);
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});