const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefdata = require("./data/chefData.json")

app.get('/', (req, res) => {
    res.send("Chef Are Coming")
})

app.get('/chefdata', (req, res) => {
    res.send(chefdata)

})

app.listen(port, () => {
    console.log(`Chef Api is running on port: ${port}`);
})