const express = require("express");
const cors = require("cors");
const computeLongestStreak = require("./utils/utils");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Foraged World!");
});
app.post("/check-text", (req, res) => {
  console.log("req body", req.body.text);
  let input = req.body.text;

  const result = computeLongestStreak(input);
  return res.json(result);
});

app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
