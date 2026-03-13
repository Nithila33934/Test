const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let userName = "";

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h2>Enter Your Name</h2>
    <form method="POST" action="/submit">
      <input type="text" name="username" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST request
app.post("/submit", (req, res) => {
  userName = req.body.username;
  res.redirect("/greet");
});

// GET request
app.get("/greet", (req, res) => {
  res.send(`<h1>Hello, ${userName}</h1>`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});