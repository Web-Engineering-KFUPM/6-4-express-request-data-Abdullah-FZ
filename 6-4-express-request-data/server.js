// TODO 1 — Server setup
import express from "express";

const app = express();

// Query params: /echo?name=Ali&age=22


// Route params: /profile/First/Last


// Route param middleware example: /users/42


// Route params: /users/:userId route


app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});