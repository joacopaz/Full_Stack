export const ContactPicker = ({ contacts, handleChange }) => {
	return (
		<select onChange={handleChange} name="contacts">
			<option defaultValue="">Choose scheduled contact</option>
			{contacts.length > 0 &&
				contacts.map((contact, i) => {
					return (
						<option value={contact.name} key={i}>
							{contact.name}
						</option>
					);
				})}
		</select>
	);
};
