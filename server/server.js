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
  try {
    let input = req.body.text;

    const result = computeLongestStreak(input);
    return res.json(result);
  } catch (error) {
    console.error(`Error: ${error}`);
    if (error.response && error.response.status === 404) {
      return res.status(404).json({
        error: `Server Error: ${error.response}`,
      });
    }
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
