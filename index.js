const express = require("express");
const app = express();
const path = require("path");
const Port = process.env.Port || 4000;

// app.get("", async () => {});

const server = app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
app.use(express.static(path.join(__dirname, "public")));
