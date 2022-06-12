$(window).ready(() => {
	if (!mobile) {
		document.querySelectorAll(".expand-button").forEach((button) => {
			button.childNodes[0].click();
		});
	}
	document.querySelector(".expand-button-skill").childNodes[0].click();
	document.querySelector(".expand-button-skill").childNodes[0].click();
	document.querySelector(".expand-button-roadmap").childNodes[0].click()
	document.querySelector(".expand-button-roadmap").childNodes[0].click()
	document
		.querySelector(".expand-button-skill")
		.addEventListener("click", () => {
			const bars = document.querySelectorAll('[data-set="false"]');
			setTimeout(() => {
				let interval = 1500;
				bars.forEach((bar) => {
					setTimeout(() => {
						bar.ldBar.set(bar.dataset.toValue);
						bar.dataset.set = "true";
					}, interval);
					interval += 1000;
				});
			}, 200);
		});
});

const expandSkill = document.querySelector(".expand-button-skill");

expandSkill.addEventListener("mouseenter", () => {
	expandSkill.classList.add("fa-beat-fade");
});
expandSkill.addEventListener("mouseleave", () => {
	expandSkill.classList.remove("fa-beat-fade");
});
expandSkill.addEventListener("focusin", () => {
	expandSkill.classList.add("fa-beat-fade");
});
expandSkill.addEventListener("focusout", () => {
	expandSkill.classList.remove("fa-beat-fade");
});
expandSkill.addEventListener("click", (evt) => {
	if (evt.target.parentNode.dataset.expanded === "false") {
		document.querySelector(".all-skills").style.display = "";
		evt.target.classList.remove("fa-square-plus");
		evt.target.classList.add("fa-circle-minus");
		evt.target.parentNode.dataset.expanded = "true";
	} else {
		document.querySelector(".all-skills").style.display = "none";
		evt.target.classList.remove("fa-circle-minus");
		evt.target.classList.add("fa-square-plus");
		evt.target.parentNode.dataset.expanded = "false";
		const bars = document.querySelectorAll('[data-set="true"]');
		bars.forEach((bar) => {
			bar.ldBar.set(0);
			bar.dataset.set = "false";
		});
	}
});
expandSkill.addEventListener("keyup", (evt) => {
	evt.preventDefault();
	if (evt.keyCode === 32 || evt.keyCode === 13) {
		const icon = evt.target.childNodes[0];
		icon.click();
	}
});

const expandRoadmap = document.querySelector(".expand-button-roadmap");

expandRoadmap.addEventListener("mouseenter", () => {
	expandRoadmap.classList.add("fa-beat-fade");
});
expandRoadmap.addEventListener("mouseleave", () => {
	expandRoadmap.classList.remove("fa-beat-fade");
});
expandRoadmap.addEventListener("focusin", () => {
	expandRoadmap.classList.add("fa-beat-fade");
});
expandRoadmap.addEventListener("focusout", () => {
	expandRoadmap.classList.remove("fa-beat-fade");
});
expandRoadmap.addEventListener("click", (evt) => {
	if (evt.target.parentNode.dataset.expanded === "false") {
		document.querySelector(".roadmap-implementation").style.display = "";
		document.querySelector(".roadmap > aside").style.display = "";
		document.querySelector(".roadmap > p").style.display = "";
		// document.querySelector(".roadmap > h2").style.display = "";
		evt.target.classList.remove("fa-square-plus");
		evt.target.classList.add("fa-circle-minus");
		evt.target.parentNode.dataset.expanded = "true";
	} else {
		document.querySelector(".roadmap-implementation").style.display = "none";
		document.querySelector(".roadmap > aside").style.display = "none";
		document.querySelector(".roadmap > p").style.display = "none";
		evt.target.classList.remove("fa-circle-minus");
		evt.target.classList.add("fa-square-plus");
		evt.target.parentNode.dataset.expanded = "false";
		const bars = document.querySelectorAll('[data-set="true"]');
		bars.forEach((bar) => {
			bar.ldBar.set(0);
			bar.dataset.set = "false";
		});
	}
});
expandRoadmap.addEventListener("keyup", (evt) => {
	evt.preventDefault();
	if (evt.keyCode === 32 || evt.keyCode === 13) {
		const icon = evt.target.childNodes[0];
		icon.click();
	}
});


document.querySelectorAll(".expand-button").forEach((button) => {
	button.addEventListener("mouseenter", () => {
		button.classList.add("fa-beat-fade");
	});
	button.addEventListener("mouseleave", () => {
		button.classList.remove("fa-beat-fade");
	});
	button.addEventListener("focusin", () => {
		button.classList.add("fa-beat-fade");
	});
	button.addEventListener("focusout", () => {
		button.classList.remove("fa-beat-fade");
	});
	button.addEventListener("click", (evt) => {
		if (evt.target.parentNode.dataset.expanded === "false") {
			evt.target.closest("article").querySelector("aside").style.display =
				"flex";
			evt.target.classList.remove("fa-square-plus");
			evt.target.classList.add("fa-circle-minus");
			evt.target.parentNode.dataset.expanded = "true";
		} else {
			evt.target.closest("article").querySelector("aside").style.display =
				"none";
			evt.target.classList.remove("fa-circle-minus");
			evt.target.classList.add("fa-square-plus");
			evt.target.parentNode.dataset.expanded = "false";
		}
	});
	button.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		if (evt.keyCode === 32 || evt.keyCode === 13) {
			const icon = evt.target.childNodes[0];
			icon.click();
		}
	});
});

document.querySelectorAll(".destination i").forEach((e) => {
	e.addEventListener("mouseenter", () => {
		e.classList.add('fa-beat')
		e.parentElement.style.color = 'rgb(157, 0, 255)'
	});
	e.addEventListener("mouseleave", () => {
		if (e.dataset.active !== 'true') {
			e.classList.remove('fa-beat')
			e.parentElement.style.color = 'red'
		}
	});
	e.addEventListener("click", () => {
		document.querySelectorAll(".tooltip").forEach(e => e.style.opacity = "")
		const tooltip = e.closest(".roadmap-element").querySelector(".tooltip");
		if (e.dataset.active && e.dataset.active === 'true') {
			tooltip.style.opacity = ""
			e.classList.remove("fa-beat")
			e.dataset.active = 'false'
		} else {
			document.querySelectorAll('.destination i').forEach(i => {
				i.dataset.active = 'false'
			})
			tooltip.style.opacity = "100"
			e.dataset.active = 'true'
			e.classList.add("fa-beat")
		}
		document.querySelectorAll(".destination i").forEach(i => {
			if (i.className.includes("beat") && i.dataset.active === 'false') {
				i.classList.remove("fa-beat")
			}
			if (i.dataset.active === 'false') {
				i.parentElement.style.color = 'red'
			}
		})
	});
});