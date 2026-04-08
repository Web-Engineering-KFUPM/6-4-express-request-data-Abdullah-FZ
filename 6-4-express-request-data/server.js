// TODO 3
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

app.get("/profile/:first/:last", (req, res) => {
  const { first, last } = req.params;

  return res.json({
    ok: true,
    fullName: `${first} ${last}`
  });
});

app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});