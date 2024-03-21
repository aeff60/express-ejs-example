const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello, Express with EJS!" });
});

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
