import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Risk Terminal Backend"});
});

app.get("/health", (req, res) => {
    res.json({message: "OK"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});