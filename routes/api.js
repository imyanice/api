const Router = require("express").Router();

Router.post("/", async (req, res) => {
    res.send("works");
    console.log(req.body)
});

module.exports = Router;