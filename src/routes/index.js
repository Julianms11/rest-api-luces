const { Router } = require("express");
const router = Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const file = fs.readFileSync("src/ledState.json", "utf-8");
  const jsonObj = JSON.parse(file);
  res.json(jsonObj);
});

router.patch("/", (req, res) => {
  const newState = JSON.stringify(req.body);
  fs.writeFileSync("src/ledState.json", newState, "utf-8");
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
