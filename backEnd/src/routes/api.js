const express = require("express");

const router = express.Router();

//API routings ::
router.get("/", (req, res) => {
  res.send(`Hello World`);
});

module.exports = router;
