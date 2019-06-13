const router = require("express").Router();
// Api Students
const students = require("./students");
const student = require("./student");
const auth = require("./auth");
const companies = require("./companies");
const company = require("./company");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Campus Recruitment System"
  });
});

router.use("/auth", auth);
router.use("/students", students);
router.use("/student", student);
router.use("/companies", companies);
router.use("/company", company);
module.exports = router;
