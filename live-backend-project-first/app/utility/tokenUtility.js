import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode = (email, user_id) => {
  const KEY = JWT_KEY;
  const EXPIRE = { expiresIn: JWT_EXPIRE_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const TokenDecode = (token) => {
  try {
    const KEY = JWT_KEY;
    let data = jwt.verify(token, KEY);
    return data;
  } catch (e) {
    return null;
  }
};
