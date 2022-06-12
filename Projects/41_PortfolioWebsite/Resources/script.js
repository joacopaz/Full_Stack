$(window).on("load", function () {
	$(".loader").fadeOut(100);
	if (typeof $("footer") !== "undefined") {
		document.querySelector("footer").style.opacity = "100%";
	}
});

$(window).ready(function () {
	$(".background").fadeIn(1000);
});

const main = document.querySelector("main");
const container = document.querySelector(".background-container");

window.onload = async () => {
	document.querySelector("[data-video]").play();
	document.onload = document.querySelector(".mask").style.opacity = "0%";
	document.onload = document.querySelector("main").style.opacity = "100%";
};

const animated = document.querySelectorAll("[data-animated]");
animated.forEach((e) => {
	e.addEventListener("mouseleave", async () => {
		const lines = e.children[0].children;
		lines[0].style.transitionDelay = "600ms";
		lines[1].style.transitionDelay = "400ms";
		lines[2].style.transitionDelay = "200ms";
		lines[3].style.transitionDelay = "0ms";
		await new Promise((r) => setTimeout(r, 600));
		for (const line of lines) {
			line.style.transitionDelay = "";
		}
	});
});

const links = document.querySelectorAll("a");
links.forEach((e) => {
	e.addEventListener("click", async (event) => {
		const href = event.target.closest("a").href;
		if (href.includes("#")) return false;
		if (href.includes("_blank")) {
			window.open(href, "_blank");
		}
		event.preventDefault();
		document.querySelector(".mask").style.opacity = "100%";
		if (typeof $("footer") !== "undefined") {
			document.querySelector("footer").style.opacity = "0%";
		}
		main.style.opacity = "0%";
		window.location = href;
	});
});

document.querySelector('[alt="Github logo"]').addEventListener('click', (evt) => {
	window.open(evt.target.dataset.linkTo, '_blank');
})

document.querySelector(".resume").addEventListener("click", () => {
	window.location = "./Resources/Joaquin Paz Resume.pdf"
})