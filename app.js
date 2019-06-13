const express = require("express");
const app = express();
//
require("./server/config/connect");

const api = require("./server/routes");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.status(404).json({
    message: "Page Not Found"
  });
});

// APIS Routes
app.use("/api/", api);

// 404 NOT FOUND
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page Not Found"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
