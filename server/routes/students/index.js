const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All Students",
    data: null
  });
});

module.exports = router;
