const express = require("express");
const app = express();

const api = require("./server/routes");

app.use(express.json());

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
