const bodyParser = require("body-parser");
const express = require("express");
const router = require("./Routes/login");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

let massage = "";
app.post("/massage", (req, res, next) => {
  fs.writeFile(
    "chat.txt",
    `${fs.readFileSync("chat.txt")} ${req.body.username} : ${req.body.massage}`,
    () => {
      res.redirect("/");
    }
  );
});

app.get("/", (req, res, next) => {
  let oldMassage = fs.readFileSync("chat.txt");

  res.send(`<p>${oldMassage}</p><form id="massage" action="/massage" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
<input type="text" name="massage" id="massage" />
<input hidden  type="text" name="username" id="username" />
<button type="submit">Send</button>
</form>`);
});

app.listen(3000);
