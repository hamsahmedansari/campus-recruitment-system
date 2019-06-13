const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Campus_Recruitment_System", {
    useNewUrlParser: true
  })
  .then(() => console.log("Db Connected"))
  .catch(err => console.error(err));
