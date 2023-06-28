const express = require("express");
const DB = require("./DB");

const app = express();
const port = 3000;

app.post("/subscribe", (req, res) => {
    res.send("ok");    
});

app.listen(port, async () => {
    if (!await DB.connect()) {
        console.log("connection false");
        process.exit(1);
    }

    console.log(`listening on ${port}....`);
});