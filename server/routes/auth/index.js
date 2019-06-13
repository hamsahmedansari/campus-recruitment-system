const router = require("express").Router();
const admin = require("./admin");
const student = require("./student");

router.get("/", (req, res) => {
  res.status(404).json({
    message: "Nothing to GET"
  });
});

router.use("/admin", admin);
router.use("/student", student);

module.exports = router;
