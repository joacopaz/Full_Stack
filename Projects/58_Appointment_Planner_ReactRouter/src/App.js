import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	/*
  Implement functions to add data to
  contacts and appointments
  */
	const setContact = (name, phone, email, action) => {
		if (action !== 1 && action !== -1)
			throw Error("setContact must be called with action as -1 or 1");
		action === 1
			? setContacts((prev) => {
					const newContacts = [...prev];
					newContacts.push({ name: name, phone: phone, email: email });
					return newContacts;
			  })
			: setContacts((prev) => {
					const newContacts = [...prev];
					newContacts.filter(
						(contact) =>
							contact.name !== name &&
							contact.phone !== phone &&
							contact.email !== email
					);
					return newContacts;
			  });
	};

	const setAppointment = (title, contact, date, time, action) => {
		if (action !== 1 && action !== -1)
			throw Error("setAppointment must be called with action as -1 or 1");
		action === 1
			? setAppointments((prev) => {
					const newAppointments = [...prev];
					newAppointments.push({
						title: title,
						contact: contact,
						date: date,
						time: time,
					});
					return newAppointments;
			  })
			: setAppointments((prev) => {
					const newAppointments = [...prev];
					return newAppointments.filter(
						(appointment) =>
							appointment.title !== title &&
							appointment.contact !== contact &&
							appointment.date !== date &&
							appointment.time !== time
					);
			  });
	};

	return (
		<>
			<nav>
				<NavLink
					to={"contacts"}
					className={(ele) => (ele.isActive ? "active" : null)}>
					Contacts
				</NavLink>
				<NavLink
					to={"appointments"}
					className={(ele) => (ele.isActive ? "active" : null)}>
					Appointments
				</NavLink>
			</nav>
			<main>
				<Routes>
					<Route
						path={"contacts"}
						element={
							<ContactsPage contacts={contacts} setContact={setContact} />
						}
					/>
					<Route
						path={"appointments"}
						element={
							<AppointmentsPage
								appointments={appointments}
								contacts={contacts}
								setAppointment={setAppointment}
							/>
						}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
