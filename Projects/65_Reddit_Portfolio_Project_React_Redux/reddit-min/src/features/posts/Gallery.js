import { useRef, useState } from "react";
import "./gallery.css";

export function Gallery({ imgs }) {
	const [active, setActive] = useState(0);

	const prevRef = useRef(null);
	const activeRef = useRef(null);
	const nextRef = useRef(null);
	const carrouselRef = useRef(null);

	const nextActive = imgs[active + 1] ? active + 1 : 0;
	const prevActive = imgs[active - 1] ? active - 1 : imgs.length - 1;

	const handleClick = ({ target }) => {
		if (target.dataset.next === "true") {
			nextRef.current.style.animationName = "enterRight";
			setTimeout(() => {
				nextRef.current.style.animationName = "unset";
				setActive((active) => (imgs[active + 1] ? active + 1 : 0));
			}, 100);
		} else {
			prevRef.current.style.animationName = "enterLeft";
			setTimeout(() => {
				prevRef.current.style.animationName = "unset";
				setActive((active) =>
					imgs[active - 1] ? active - 1 : imgs.length - 1
				);
			}, 100);
		}
	};

	return (
		<>
			<div className="carrouselContainer">
				<div className="carrousel" ref={carrouselRef}>
					<img
						src={imgs[prevActive]}
						alt="Gallery"
						ref={prevRef}
						className="inactive imgLeft"></img>
					<img
						src={imgs[active]}
						alt="Gallery"
						ref={activeRef}
						className="active"></img>
					<img
						src={imgs[nextActive]}
						alt="Gallery"
						ref={nextRef}
						className="inactive imgRight"></img>

					<div className="carrouselLabel">
						{active + 1} / {imgs.length}
					</div>
				</div>
				<div
					className="carrouselButton alignRight"
					onClick={handleClick}
					data-next={true}>
					{">"}
				</div>
				<div
					className="carrouselButton alignLeft"
					onClick={handleClick}
					data-next={false}>
					{"<"}
				</div>
			</div>
		</>
	);
}
