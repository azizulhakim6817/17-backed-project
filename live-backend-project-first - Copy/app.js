import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import router from "./routes/api.js";

const app = express();

import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";

//App Use Default Middleware............
app.use(cors());
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(helmet());

//App use limiter.................
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

//Cache.................
app.set("etag", WEB_CACHE);

//Database connection.......................................
mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connnect");
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
});
