const router = require("express").Router();
const admin = require("./admin");

router.get("/", (req, res) => {
  res.status(404).json({
    message: "Nothing to GET"
  });
});

router.use("/admin", admin);

module.exports = router;
