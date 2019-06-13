const router = require("express").Router();
const admin = require("./admin");
const student = require("./student");
const company = require("./company");

router.get("/", (req, res) => {
  res.status(404).json({
    message: "Nothing to GET"
  });
});

router.use("/admin", admin);
router.use("/student", student);
router.use("/company", company);

module.exports = router;
