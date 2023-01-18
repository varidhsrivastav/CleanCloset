import express from "express";

const app = express();
const port = 5003;

app.get("/", (req, res) => {
  res.send("Hello from ngoServer");
});

app.listen(port, () => {
  console.log(`ngoServer listening at http://localhost:${port}`);
});
