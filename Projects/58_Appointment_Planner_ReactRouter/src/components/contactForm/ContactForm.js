import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	const handleChange = ({ target }) => {
		if (target.name === "Name") return setName(target.value);
		if (target.name === "Phone") return setPhone(target.value);
		if (target.name === "Email") return setEmail(target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				name="Name"
				placeholder="Name"
				onChange={handleChange}
				value={name}></input>
			<input
				name="Phone"
				placeholder="Phone"
				onChange={handleChange}
				value={phone}></input>
			<input
				name="Email"
				placeholder="Email"
				onChange={handleChange}
				value={email}></input>
			<button type="submit">Submit</button>
		</form>
	);
};
