const router = require("express").Router();
const { Decrypt } = require("../../helpers");
const { Users } = require("../../models/users");

router.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let users = await Users.findById(id);
    if (!users)
      return res.status(404).json({
        message: "User Not Found"
      });
    users.email = "email" in req.body ? req.body.email : users.email;
    users.userName =
      "userName" in req.body ? req.body.userName : users.userName;
    users.password =
      "password" in req.body
        ? await Decrypt(req.body.password)
        : users.password;

    const data = await users.save();

    res.status(200).json({
      message: "Successfully Updated",
      data
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
