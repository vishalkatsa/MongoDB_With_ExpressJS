const express = require("express");
require("./db/connect");
const rtStudent = require('./routers/rtStudent')
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); ////////////////// Note
// we need to register our router
app.use(rtStudent);

app.listen(port, () => {
  console.log(`PORT LIVE ON ${port}`);
});
