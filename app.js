const express = require('express')
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000
const Route = require("./routes/route");
app.use(cors())
app.use("/api", Route);
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})