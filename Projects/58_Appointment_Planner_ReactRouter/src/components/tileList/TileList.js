import { Tile } from "../tile/Tile";

export const TileList = (props) => {
	let arrayOfObjs;
	if (props.contacts) arrayOfObjs = props.contacts;
	if (props.appointments) arrayOfObjs = props.appointments;
	if (!arrayOfObjs)
		throw Error("Invalid TileList prop, it must have contacts or appointments");
	return (
		<div>
			{arrayOfObjs.map((obj, i) => {
				return <Tile obj={obj} key={i} />;
			})}
		</div>
	);
};
