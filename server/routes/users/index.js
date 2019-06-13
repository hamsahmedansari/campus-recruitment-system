const router = require("express").Router();

const GET = require("./GET");
const DELETE = require("./DELETE");
const PUT = require("./PUT");
const POST = require("./POST");

router.use("/", GET);
router.use("/", POST);
router.use("/", PUT);
router.use("/", DELETE);

module.exports = router;
