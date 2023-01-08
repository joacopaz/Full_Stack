const checkMillionDollarIdea = (req, res, next) => {
	try {
		req.idea = req.body;
		const { numWeeks, weeklyRevenue } = req.idea;
		if (!numWeeks || !weeklyRevenue) {
			return res
				.status(400)
				.send("The idea must have numWeeks and weeklyRevenue properties.");
		}
		if (!Number(numWeeks) || !Number(weeklyRevenue))
			return res.status(400).send("numWeeks and weeklyRevenue must be numbers");

		if (numWeeks * weeklyRevenue < 1000000) {
			const err = new Error();
			err.message = `This idea is not a million dollar idea! numWeeks * weeklyRevenue = ${
				numWeeks * weeklyRevenue
			}`;
			return res.status(400).send(err.message);
		}

		next();
	} catch (err) {
		err.status = 400;
		next(err);
	}
};

module.exports = checkMillionDollarIdea;
