const router = require("express").Router();

const GET = require("./GET");
const POST = require("./POST");

router.use("/", GET);
router.use("/", POST);

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
      "password" in req.body ? req.body.password : users.password;

    const data = await users.save();

    res.status(200).json({
      message: "Successfully Updated",
      data
    });
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let user = await Users.findById(id);
    if (!user)
      return res.status(404).json({
        message: "User Not Found "
      });
    const result = await Users.findByIdAndRemove(id);
    if (result) {
      res.status(200).json({
        message: "Successfully Deleted",
        data: result
      });
    } else {
      res.status(500).json({
        message: "Server Error"
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Todo Not Found with Bad Request"
    });
  }
});

module.exports = router;
