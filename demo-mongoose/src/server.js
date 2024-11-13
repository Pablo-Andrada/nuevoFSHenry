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

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({error: err.message})
})
module.exports = app;