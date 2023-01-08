const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4001;

app.use(cors());

app.use(bodyParser.json());

const apiRouter = require("./server/api");
app.use("/api", apiRouter);

if (!module.parent) {
	app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}

module.exports = app;
