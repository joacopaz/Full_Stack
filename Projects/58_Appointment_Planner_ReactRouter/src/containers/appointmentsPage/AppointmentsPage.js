import { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = ({
	appointments,
	contacts,
	setAppointment,
}) => {
	const [title, setTitle] = useState("");
	const [contact, setContact] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!time || !date || !title)
			return alert("Please fill title, date and time");
		setAppointment(title, contact, date, time, 1);
		setTitle("");
		setContact("");
		setDate("");
		setTime("");
	};

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm
					contacts={contacts}
					title={title}
					setTitle={setTitle}
					contact={contact}
					setContact={setContact}
					date={date}
					setDate={setDate}
					time={time}
					setTime={setTime}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
				<TileList appointments={appointments} />
			</section>
		</div>
	);
};
