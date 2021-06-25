import * as express from "express";
const Router = express.Router();

Router.post("/", (req, res) => {
    if (req.body.token === "Yan1sTh3B3stC0d3r") {// Yan is the best coder
        res.send(`
        Your ip is: ${req.ip},
        `)
    } else {
        res.status(401).send(
            {
                "401": "Unauthorized"
            }
        );
    }
});

module.exports = Router;