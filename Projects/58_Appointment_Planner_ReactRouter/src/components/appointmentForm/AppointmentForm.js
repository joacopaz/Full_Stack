import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString("en-GB")
			.split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	const handleChange = ({ target }) => {
		if (target.name === "title") setTitle(target.value);
		if (target.name === "date") setDate(target.value);
		if (target.name === "time") setTime(target.value);
		if (target.name === "contacts") setContact(target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="title"
				type="text"
				placeholder="Title"
				value={title}
				onChange={handleChange}></input>
			<input
				name="date"
				type="date"
				min={getTodayString()}
				placeholder="Date"
				value={date}
				onChange={handleChange}></input>
			<input
				name="time"
				type="time"
				placeholder="Time"
				value={time}
				onChange={handleChange}></input>
			<ContactPicker contacts={contacts} handleChange={handleChange} />
			<button type="submit">Submit</button>
		</form>
	);
};
