const router = require("express").Router();
// Api Students
const students = require("./students");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Campus Recruitment System"
  });
});

router.use("/students", students);

module.exports = router;
