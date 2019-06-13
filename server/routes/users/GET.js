const router = require("express").Router();

const { Users } = require("../../models/users");

router.get("/", async (req, res) => {
  let page = Math.max(0, Number(req.query.page));
  let limit = req.query.limit ? Number(req.query.limit) : 10;
  try {
    let data = await Users.find({})
      .limit(limit)
      .skip(page * limit)
      .sort({
        date: "asc"
      });
    if (!data)
      return res.status(404).json({
        message: "User Not Found"
      });

    const newData = data.map(d => {
      const temp = { ...d._doc };
      delete temp.password;
      return temp;
    });
    res.status(200).json({
      message: "Successfully Get All",
      data: newData
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({
      message: "Got Some Error",
      data: error
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Users.findById(id);
    if (!data)
      return res.status(404).json({
        message: "User Not Found"
      });

    res.status(200).json({
      message: "Successfully Updated",
      data
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({
      message: "Got Some Error",
      data: error
    });
  }
});
module.exports = router;
