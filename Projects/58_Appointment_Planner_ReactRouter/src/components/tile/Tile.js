export const Tile = ({ obj }) => {
	const arr = Object.values(obj);
	return (
		<div className="tile-container">
			{arr.map((val, i) => {
				if (i === 0)
					return (
						<p className="tile-title" key={i}>
							{val}
						</p>
					);
				return (
					<p className="tile" key={i}>
						{val}
					</p>
				);
			})}
		</div>
	);
};
