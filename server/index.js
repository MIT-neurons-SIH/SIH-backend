const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();
configDotenv();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
