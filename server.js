const express = require("express");
const app = express();
const ejs = require("ejs");

const { PORT } = require("./config");
const router = require("./controllers");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("public"));
app.use(cookieParser());
app.use(router);

app.listen({ port: PORT }, () => {
  console.log(`localhost://${PORT}`);
});
