const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Chef Are Coming")
})

app.listen(port, () => {
    console.log(`Chef Api is running on port: ${port}`);
})