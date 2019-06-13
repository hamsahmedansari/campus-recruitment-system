const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All Students",
    data: null
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Successfully Created",
    data: req.body
  });
});

module.exports = router;
