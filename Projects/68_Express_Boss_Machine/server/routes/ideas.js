const express = require("express");
const app = require("../api");
const db = require("../db");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");
const ideasRouter = express.Router();

ideasRouter.get("/", (req, res, next) => {
	try {
		res.send(db.getAllFromDatabase("ideas"));
	} catch (err) {
		next(err);
	}
});

ideasRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
	try {
		const added = db.addToDatabase("ideas", req.idea);
		return res.status(201).send(added);
	} catch (err) {
		next(err);
	}
});

ideasRouter.param("ideaId", (req, res, next, id) => {
	try {
		const found = db.getFromDatabaseById("ideas", id);
		if (found) {
			req.idea = found;
			return next();
		}
		res.sendStatus(404);
	} catch (err) {
		next(err);
	}
});

ideasRouter.get("/:ideaId", (req, res, next) => {
	try {
		res.status(200).send(req.idea);
	} catch (err) {
		next(err);
	}
});

ideasRouter.put("/:ideaId", checkMillionDollarIdea, (req, res, next) => {
	try {
		const { id } = req.idea;
		const updatedIdea = db.updateInstanceInDatabase("ideas", {
			...req.body,
			id,
		});
		res.status(200).send(updatedIdea);
	} catch (err) {
		next(err);
	}
});

ideasRouter.delete("/:ideaId", (req, res, next) => {
	try {
		db.deleteFromDatabaseById("ideas", req.idea.id);
		res.status(204).send(`Successfully deleted idea ${req.idea.id}.`);
	} catch (err) {
		next(err);
	}
});

module.exports = ideasRouter;
