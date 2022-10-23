import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectMuted,
	setMuted,
	setInteracted,
	selectInteracted,
	selectVol,
	setVol,
} from "./postsSlice";
import isMuted from "../../assets/muted.png";
import isUnmuted from "../../assets/unmuted.png";
export function Video({ id, video }) {
	const dispatch = useDispatch();
	const muted = useSelector(selectMuted);
	const interacting = useSelector(selectInteracted);
	const vol = useSelector(selectVol);
	const [playing, setPlaying] = useState(false);
	const [ended, setEnded] = useState(false);
	const [timeoutID, setTimeoutID] = useState(false);
	const [timeoutVideoID, setTimeoutVideoID] = useState(false);
	const [fullScreen, setFullScreen] = useState(false);
	const videoRef = useRef(null);
	const audioRef = useRef(null);
	const mutedRef = useRef(null);
	const seekRef = useRef(null);
	const volRef = useRef(null);
	const controlsRef = useRef(null);
	const videoContainerRef = useRef(null);
	const play = () => {
		videoRef.current.play();
		audioRef.current.currentTime = videoRef.current.currentTime;
	};
	const pause = () => {
		videoRef.current.pause();
		audioRef.current.currentTime = videoRef.current.currentTime;
	};
	const toggleFullScreen = (elem) => {
		if (!fullScreen) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}
			setFullScreen(true);
		} else {
			document.exitFullscreen();
			setFullScreen(false);
		}
	};
	useLayoutEffect(() => {
		document.onfullscreenchange = () => {
			document.fullscreenElement ? setFullScreen(true) : setFullScreen(false);
		};
		return () => {
			document.onfullscreenchange = undefined;
		};
	});
	useEffect(() => {
		const handlePlay = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !playing && !interacting) play();
				if (!entry.isIntersecting && playing && !interacting) pause();
			});
		};
		const options = {
			rootMargin: "0px",
			threshold: [1],
		};

		let observer = new IntersectionObserver(handlePlay, options);

		observer.observe(videoRef.current);
		return () => observer.disconnect();
	}, [playing, interacting]);
	useEffect(() => {
		audioRef.current.volume = vol;
		volRef.current.value = vol * 100;
	}, [vol, dispatch]);
	return (
		<>
			<div
				className="videoContainer"
				ref={videoContainerRef}
				onMouseMove={() => {
					controlsRef.current.style.opacity = "100";
					if (timeoutID) clearTimeout(timeoutID);
					setTimeoutID(
						setTimeout(() => {
							controlsRef.current.style.opacity = "0";
							setTimeoutID(false);
						}, 1000)
					);
				}}>
				<div
					className="invisibleListener"
					onClick={(e) => {
						if (!playing) {
							dispatch(setInteracted(false));
							e.target.scrollIntoView({ behavior: "smooth", block: "center" });
							play();
						}
						if (playing) {
							dispatch(setInteracted(true));
							pause();
						}
					}}></div>
				<div className="controls" ref={controlsRef}>
					<div
						className={playing ? "pause" : "play"}
						onClick={() => {
							if (!playing) {
								play();
								setInteracted(false);
							}
							if (playing) {
								pause();
								dispatch(setInteracted(true));
							}
						}}></div>
					<input
						ref={seekRef}
						className="seek"
						type="range"
						min="0"
						max="100"
						step="0.01"
						defaultValue="0"
						onBeforeInput={(e) => {
							videoRef.current.pause();
							dispatch(setInteracted(true));
							console.log(e);
						}}
						// onMouseDownCapture={(e) => {
						// 	dispatch(setInteracted(true));
						// 	videoRef.current.pause();
						// 	console.log(e);
						// }}
						onMouseUpCapture={() => {
							setInteracted(false);
							videoRef.current.currentTime = parseFloat(seekRef.current.value);
							play();
						}}
					/>
					<div
						className="mute"
						ref={mutedRef}
						onMouseOver={() => (volRef.current.style.opacity = 100)}
						onMouseOut={() =>
							setTimeout(() => (volRef.current.style.opacity = 0), 2000)
						}
						style={
							!muted || (volRef.current && parseFloat(volRef.current.value)) > 0
								? {
										backgroundImage: `url(${isUnmuted})`,
								  }
								: { backgroundImage: `url(${isMuted})` }
						}
						onClick={() => {
							if (audioRef && audioRef.current && muted) {
								audioRef.current.currentTime = videoRef.current.currentTime;
								dispatch(setMuted(false));
								dispatch(setVol(0.5));
								volRef.current.value = 50;

								if (playing) audioRef.current.play();
							} else if (audioRef && audioRef.current && !muted) {
								audioRef.current.pause();
								volRef.current.value = 0;
								dispatch(setVol(0));
								dispatch(setMuted(true));
							}
						}}></div>
					<div className="volWrapper">
						<input
							type="range"
							orient="vertical"
							min="0"
							max="100"
							step="1"
							defaultValue={vol}
							onMouseUp={(e) =>
								dispatch(setVol(parseFloat(e.target.value / 100)))
							}
							onChange={(e) => {
								if (!muted && parseFloat(e.target.value) === 0)
									dispatch(setMuted(true));
								if (muted && parseFloat(e.target.value) > 0)
									dispatch(setMuted(false));
							}}
							className="vol"
							ref={volRef}></input>
					</div>
					<div
						className="toggleFullScreen"
						onClick={() => {
							toggleFullScreen(videoContainerRef.current);
						}}></div>
				</div>

				<video
					ref={videoRef}
					onLoadedData={(e) => {
						seekRef.current.max = e.target.duration * 0.98;
					}}
					onTimeUpdate={(e) => {
						if (timeoutVideoID) return;
						seekRef.current.value = e.target.currentTime;
						if (e.target.duration === e.target.currentTime) setEnded(true);
						setTimeoutVideoID(setTimeout(() => setTimeoutVideoID(false), 200));
					}}
					onPlay={(e) => {
						setEnded(false);
						setPlaying(true);

						if (!muted) audioRef.current.play();
					}}
					onPause={() => {
						setPlaying(false);
						audioRef.current.pause();
					}}
					src={video.videoURL}></video>
				<audio src={video.audioURL} ref={audioRef}></audio>
			</div>
		</>
	);
}
