const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
require("dotenv").config()

const PORT = process.env.PORT || 1000
app.listen(PORT, () => console.log(`listening on ${PORT}...`));

