const express = require("express");
const router = require("./router");

const app = express();
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log("app listen on http://localhost:3000")
})