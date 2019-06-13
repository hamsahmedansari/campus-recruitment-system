const router = require("express").Router();

const { isInObject } = require("../../helpers");
const { Users } = require("../../models/users");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Single Admin",
    data: null
  });
});

router.post("/", async (req, res) => {
  const validate = isInObject(req.body, ["userName", "email", "password"]);
  if (typeof validate === "string") {
    return res.status(400).json({
      message: "Got Error in the Form",
      data: validate
    });
  }

  let obj = new Users({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    accountType: "admin"
  });
  try {
    let data = await obj.save();
    res.status(200).json({
      message: "Successfully Created Added",
      data
    });
  } catch ({ errors }) {
    return res.status(400).json({
      message: "Got Error in the Form",
      data: errors
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
