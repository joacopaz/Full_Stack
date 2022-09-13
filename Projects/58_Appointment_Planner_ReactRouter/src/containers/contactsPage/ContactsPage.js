import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (duplicate) return alert(`Contact already exists`);
		if (
			!phone.match(
				/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
			)
		)
			return alert("Invalid phone");
		if (!email.match(/\w+@\w+.\w+/)) return alert("Invalid email");
		props.setContact(name, phone, email, 1);
		setName("");
		setPhone("");
		setEmail("");
	};

	useEffect(() => {
		if (props.contacts.filter((contact) => contact.name === name).length > 0)
			return setDuplicate(true);
		return setDuplicate(false);
	}, [name, props.contacts]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>

				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
				{duplicate ? (
					<p style={{ color: "red", fontWeight: "800" }}>
						CONTACT ALREADY EXISTS
					</p>
				) : (
					""
				)}
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList contacts={props.contacts} />
			</section>
		</div>
	);
};
