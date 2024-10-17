//Basic...Library import.......................................
const express = require("express");
const router = require("./src/routers/api.js");

const app = new express();
const bodyParser = require("body-parser");

//Security Middleware...library import..............
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitizer = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database connection......................
const mongoose = require("mongoose");

//Securiry Middleware Implementes use
app.use(cors());
app.use(helmet());
app.use(mongoSanitizer());
app.use(xss());
app.use(hpp());

//Body Parser Implementes use
app.use(bodyParser.json());

//request Rate Limiter Implementes use
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
