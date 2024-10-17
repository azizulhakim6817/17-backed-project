const jwt = require("jsonwebtoken");

exports.TokenIssue = (req, res) => {
  let Playload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Aziz", Roll: "3029", Class: "programs" },
  };

  let Token = jwt.sign(Playload, "ScreatKey123");

  res.send(Token);
};
