const router = require("express").Router();
const bcrypt = require("bcrypt");

const { Users } = require("../../models/users");
const { isInObject } = require("../../helpers");

router.post("/", async (req, res) => {
  try {
    const validate = isInObject(req.body, [
      "userName",
      "email",
      "password",
      "accountType"
    ]);
    if (typeof validate === "string") {
      throw `Please Add ${validate}`;
    }
    const password = await bcrypt.hashSync(req.body.password, 10);
    let obj = new Users({
      userName: req.body.userName,
      email: req.body.email,
      password: password,
      accountType: req.body.accountType
    });
    let data = await obj.save();
    res.status(200).json({
      message: "Successfully Created Added",
      data
    });
  } catch (errors) {
    return res.status(400).json({
      message: "Got Error in the Form",
      data: typeof errors === "Object" ? errors.errmsg : errors
    });
  }
});

module.exports = router;
