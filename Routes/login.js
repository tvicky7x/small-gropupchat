const express = require("express");

const router = express();

router.get("/login", (req, res, next) => {
  res.send(`
  <form
      id="login"
      onsubmit="localStorage.setItem('username',document.getElementById('username').value)"
      action="/login"
      method="post"
    >
      <input type="text" name="username" id="username" />
      <button type="submit">Send</button>
    </form>`);
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
