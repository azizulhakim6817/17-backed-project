const jwt = require("jsonwebtoken");

exports.CreateEncodedToken = (req, res) => {
  let Playload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Aziz", Roll: "3029", Class: "programs" },
  };

  let Token = jwt.sign(Playload, "ScreatKey123");

  res.send(Token);
};

module.exports = (req, res, next) => {
  let token = req.headers["token_key"];
  jwt.verify(token, "ScreatKey123", function (err, decoded) {
    if (err) {
      res.stastus(401).json({ status: "invalid token", data: err });
    } else {
      res.status(200).json({ status: "success token", data: decoded });
    }
  });
};
