const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 7000;

app.set("view engine", "ejs");
app.use(express.json());
app.use("/assets", express.static("public"));

app.get;

app.listen(PORT, () => {
  console.log(`localhost://${PORT}`);
});
