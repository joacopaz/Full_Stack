const express = require("express");
const morgan = require("morgan");
const apiRouter = express.Router();

apiRouter.use(morgan("dev"));

const minionsRouter = require("./routes/minions.js");
apiRouter.use("/minions", minionsRouter);

const ideasRouter = require("./routes/ideas");
apiRouter.use("/ideas", ideasRouter);

const meetingsRouter = require("./routes/meetings");
apiRouter.use("/meetings", meetingsRouter);

apiRouter.use((err, req, res, next) => {
	const status = err.status || 500;
res.status(status).send(err.message);
});

module.exports = apiRouter;
