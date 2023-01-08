const express = require("express");
const db = require("../db");
const workRouter = require("./work");

const minionsRouter = express.Router();

minionsRouter.use("/:minionId/work", workRouter);

minionsRouter.get("/", (req, res, next) => {
	try {
		const data = db.getAllFromDatabase("minions");
		res.status(200).send(data);
	} catch (err) {
		next(err);
	}
});

minionsRouter.post("/", (req, res, next) => {
	try {
		const newMinion = req.body;
		const addedMinion = db.addToDatabase("minions", newMinion);
		return res.status(201).send(addedMinion);
	} catch (err) {
		next(err);
	}
});

minionsRouter.param("minionId", (req, res, next, id) => {
	const found = db.getFromDatabaseById("minions", id);
	if (found) {
		req.minion = found;
		return next();
	}
	res.sendStatus(404);
});

minionsRouter.get("/:minionId", (req, res, next) => {
	try {
		return res.status(200).send(req.minion);
	} catch (err) {
		next(err);
	}
});

minionsRouter.put("/:minionId", (req, res, next) => {
	try {
		const { id } = req.minion;
		const updatedMinion = db.updateInstanceInDatabase("minions", {
			...req.body,
			id,
		});
		res.status(200).send(updatedMinion);
	} catch (err) {
		next(err);
	}
});

minionsRouter.delete("/:minionId", (req, res, next) => {
	try {
		db.deleteFromDatabaseById("minions", req.minion.id);
		res.status(204).send(`Successfully deleted minion ${req.minion.id}.`);
	} catch (err) {
		next(err);
	}
});

module.exports = minionsRouter;
