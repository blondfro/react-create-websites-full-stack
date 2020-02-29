import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.post("/hello", (req, res) => {
    res.send("Hello " + req.body.name);
});

app.listen(PORT, ()=>{console.log("Listening on port: ", PORT)});