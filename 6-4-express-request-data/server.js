// TODO 2 
import express from "express";

const app = express();

app.get("/echo", (req, res) => {
  const { name, age } = req.query;

  if (!name || !age) {
    return res.status(400).json({ ok: false, error: "name & age required" });
  }

  return res.json({
    ok: true,
    name,
    age,
    msg: `Hello ${name}, you are ${age}`
  });
});

app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});