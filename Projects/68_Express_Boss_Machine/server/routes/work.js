const express = require("express");
const db = require("../db");

const workRouter = express.Router({ mergeParams: true });

workRouter.get("/", (req, res, next) => {
	try {
		const allWork = db
			.getAllFromDatabase("work")
			.filter((work) => work.minionId === req.minion.id);
		res.status(200).send(allWork);
	} catch (err) {
		next(err);
	}
});

workRouter.post("/", (req, res, next) => {
	try {
		req.body.minionId = req.minion.id;
		const addedWork = db.addToDatabase("work", req.body);
		res.status(201).send(addedWork);
	} catch (err) {
		next(err);
	}
});

workRouter.param("workId", (req, res, next, id) => {
	try {
		const found = db.getFromDatabaseById("work", id);
		if (found && found.minionId !== req.minion.id) return res.sendStatus(400);
		if (found) {
			req.work = found;
			return next();
		}
		res.sendStatus(404);
	} catch (err) {
		next(err);
	}
});

workRouter.put("/:workId", (req, res, next) => {
	try {
		const minionId = req.minion.id;
		const { id } = req.work;
		const updatedWork = db.updateInstanceInDatabase("work", {
			...req.body,
			id,
			minionId,
		});
		res.status(200).send(updatedWork);
	} catch (err) {
		next(err);
	}
});

workRouter.delete("/:workId", (req, res, next) => {
	try {
		const { id } = req.work;
		db.deleteFromDatabaseById("work", id);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
});

module.exports = workRouter;

const workSchema = {
	id: String,
	title: String,
	description: String,
	hours: Number,
	minionId: String,
};
