const express = require('express');
require("../src/db/connect")
const router = require("../src/routers/mens")


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Express Connecting is live at ${port}`);
});