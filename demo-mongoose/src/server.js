const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const miMiddleware = require("./middleware");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(miMiddleware);

app.use(router);

module.exports = app;