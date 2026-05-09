const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "UP",
    message: "Service is healthy",
    time: new Date()
  });
});

module.exports = router;