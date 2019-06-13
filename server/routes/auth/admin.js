const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Single Admin",
    data: null
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Successfully Created",
    data: req.body
  });
});

router.put("/", (req, res) => {
  res.status(200).json({
    message: "Successfully Updated",
    data: req.body
  });
});

router.delete("/", (req, res) => {
  res.status(200).json({
    message: "Successfully Deleted",
    data: req.body
  });
});

module.exports = router;
