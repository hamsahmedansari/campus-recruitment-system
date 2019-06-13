const router = require("express").Router();
// Api Students
const students = require("./students");
const student = require("./student");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Campus Recruitment System"
  });
});

router.use("/students", students);
router.use("/student", student);

module.exports = router;
