import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUnmuted, setUnmuted } from "./postsSlice";
import isMuted from "../../assets/muted.png";
import isUnmuted from "../../assets/unmuted.png";
export function Video({ id, video }) {
	const dispatch = useDispatch();
	const unmuted = useSelector(selectUnmuted);
	const [playing, setPlaying] = useState(false);
	const [time, setTime] = useState(0);
	const videoRef = useRef(null);
	const audioRef = useRef(null);
	const mutedRef = useRef(null);
	const seekRef = useRef(null);
	const play = () => {
		videoRef.current.play();
		setPlaying(true);
	};
	const pause = () => {
		videoRef.current.pause();
		setPlaying(false);
	};
	useEffect(() => {
		const handlePlay = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !playing) play();
				if (!entry.isIntersecting && playing) pause();
			});
		};
		const options = {
			rootMargin: "0px",
			threshold: [1],
		};

		let observer = new IntersectionObserver(handlePlay, options);

		observer.observe(videoRef.current);
		return () => observer.disconnect();
	}, [playing]);

	return (
		<>
			<div className="videoContainer">
				<div className="controls">
					<div className="play"></div>
					<input
						ref={seekRef}
						className="seek"
						type="range"
						min="0"
						max="100"
						step="0.1"
						defaultValue="0"
						onMouseDown={() => console.log("mousedown")}
					/>
					<div
						className="mute"
						ref={mutedRef}
						style={
							unmuted
								? {
										backgroundImage: `url(${isUnmuted})`,
								  }
								: { backgroundImage: `url(${isMuted})` }
						}
						onClick={() => {
							if (audioRef && audioRef.current && !unmuted) {
								videoRef.current.play();
								audioRef.current.currentTime = videoRef.current.currentTime;
								audioRef.current.play();
								dispatch(setUnmuted(true));
							}
							if (unmuted) {
								mutedRef.current.hidden = false;
								audioRef.current.pause();
								dispatch(setUnmuted(false));
							}
						}}></div>
				</div>

				<video
					ref={videoRef}
					onLoadedData={(e) => {
						seekRef.current.max = e.target.duration - 1;
					}}
					onTimeUpdate={(e) => (seekRef.current.value = e.target.currentTime)}
					onPlay={() => {
						if (unmuted) audioRef.current.play();
					}}
					onPause={() => {
						audioRef.current.pause();
					}}
					onSeeked={(e) => {
						if (unmuted) audioRef.current.currentTime = e.target.currentTime;
					}}
					src={video.videoURL}></video>
				<audio src={video.audioURL} ref={audioRef}></audio>
			</div>
		</>
	);
}
