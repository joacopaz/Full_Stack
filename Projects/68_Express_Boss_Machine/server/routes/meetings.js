const express = require("express");
const app = require("../api");
const db = require("../db");
const meetingsRouter = express.Router();

meetingsRouter.get("/", (req, res, next) => {
	try {
		res.status(200).send(db.getAllFromDatabase("meetings"));
	} catch (err) {
		next(err);
	}
});

meetingsRouter.post("/", (req, res, next) => {
	try {
		const newMeeting = db.createMeeting();
		const updatedMeeting = db.addToDatabase("meetings", newMeeting);
		res.status(201).send(updatedMeeting);
	} catch (err) {
		next(err);
	}
});

meetingsRouter.delete("/", (req, res, next) => {
	try {
		db.deleteAllFromDatabase("meetings");
		return res.status(204).send("All meetings have been deleted.");
	} catch (err) {
		next(err);
	}
});

module.exports = meetingsRouter;
