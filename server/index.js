const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

app.use("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(5000, () => {
  console.log("Server started on PORT 5000");
});
