import { useRef, useEffect, useState } from "react";
export function Video({ id, video }) {
	const [playing, setPlaying] = useState(false);
	const [userInteracted, setUserInteracted] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		let options = {
			rootMargin: "0px",
			threshold: [1],
		};

		let handlePlay = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (!playing) videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			});
		};

		let observer = new IntersectionObserver(handlePlay, options);

		observer.observe(videoRef.current);
	});
	return (
		<>
			<div className="videoContainer" onClick={() => setUserInteracted(true)}>
				<video
					controls
					muted
					ref={videoRef}
					onPlay={() => {
						document.getElementById(`audio_${id}`).play();
						setPlaying(true);
					}}
					onPause={() => {
						document.getElementById(`audio_${id}`).pause();
						setPlaying(false);
					}}
					onSeeked={(e) => {
						document.getElementById(`audio_${id}`).currentTime =
							e.target.currentTime;
					}}
					src={video.videoURL}
					id={"video_" + id}></video>
				<audio src={video.audioURL} id={"audio_" + id}></audio>
			</div>
		</>
	);
}
