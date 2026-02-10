const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());   // IMPORTANT

let counter = 0;

app.get("/api/status", (req, res) => {
  counter++;
  res.json({
    status: "Running",
    pod: os.hostname(),
    requests: counter,
    time: new Date().toLocaleString()
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});


