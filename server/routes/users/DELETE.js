const router = require("express").Router();
const { Users } = require("../../models/users");

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
