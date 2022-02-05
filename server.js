const express = require("express");
const ejs = require("ejs");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 7000;
const router = require("./controllers");

app.set("view engine", "ejs");
app.use(express.json());
app.use("/assets", express.static("public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`localhost://${PORT}`);
});
