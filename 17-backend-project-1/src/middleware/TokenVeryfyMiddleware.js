const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["token_key"];
  jwt.verify(token, "ScreatKey123", function (err, decoded) {
    if (err) {
      res.status(401).json({ status: "invalid token", data: err });
    } else {
      next();
    }
  });
};
