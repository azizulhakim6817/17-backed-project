import { TokenDecode } from "../utility/tokenUtility.js";

export default (req, res, next) => {
  let token = req.headers["token"];
  let docoded = TokenDecode(token);

  if (docoded === null) {
    res.status(401).json({ status: "fail", message: "Unauthorized!" });
  } else {
    let email = docoded.email;
    let user_id = docoded.user_id;
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
