const router = require("express").Router();
// Api Students
const student = require("./student");
const users = require("./users");
const company = require("./company");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Campus Recruitment System"
  });
});

router.use("/users", users);
router.use("/student", student);
router.use("/company", company);
module.exports = router;
