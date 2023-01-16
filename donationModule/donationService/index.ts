import express from "express";

const app = express();
const port = 5002;

app.get("/", (req, res) => {
  res.send("Hello from donationService");
});

app.listen(port, () => {
  console.log(`donationService listening at http://localhost:${port}`);
});
