const router = require("express").Router();

const { Student } = require("../../models/student");

router.get("/", async (req, res) => {
  try {
    let data = await Student.find();
    if (!data)
      return res.status(404).json({
        message: "Student Not Found"
      });
    res.status(200).json({
      message: "All Students",
      data
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findById(id);
    if (!data)
      return res.status(404).json({
        message: "User Not Found"
      });

    res.status(200).json({
      message: "Successfully",
      data
    });
  } catch (error) {}
});

router.post("/:id", async (req, res) => {
  let { id } = req.params;

  const validate = isInObject(req.body, [
    "firstName",
    "lastName",
    "qualification",
    "jobsApplied"
  ]);
  if (typeof validate === "string") {
    return res.status(400).json({
      message: "Got Error in the Form",
      data: validate
    });
  }
  let tempData = await Student.findById(id);
  if (tempData)
    return res.status(404).json({
      message: "User is already Exist"
    });

  let obj = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    qualification: req.body.qualification,
    jobsApplied: req.body.jobsApplied,
    _id: id
  });
  try {
    let data = await obj.save();
    res.status(200).json({
      message: "Successfully Created Added",
      data
    });
  } catch (errors) {
    return res.status(400).json({
      message: "Got Error in the Form",
      data: errors.errmsg
    });
  }
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
