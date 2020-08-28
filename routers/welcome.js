const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "HELLO and WELCOME",
  });
});
module.exports = router;
