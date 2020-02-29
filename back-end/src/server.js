import express from "express";

const app = express();
const PORT = 8000;


app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, ()=>{console.log("Listening on port: ", PORT)});