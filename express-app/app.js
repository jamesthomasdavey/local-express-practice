const express = require("express");
const app = express();

const catMe = require("cat-me");

app.get("/", (req, res) => {
  const myCat = catMe().split(`\n`);
  res.render("home.ejs", { myCat });
  // console.dir(myCat);
});

app.listen(3000, () => {
  console.log("Your server is running, hue man.");
});
