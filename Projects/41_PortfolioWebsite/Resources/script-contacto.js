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

document.querySelector('[alt="Github logo"]').addEventListener('click', (evt) => {
    window.open(evt.target.dataset.linkTo, '_blank');
})


$("[alt='Mail Contact']").mouseover(function () {
    let offsets = $("[alt='Mail Contact']").offset();
    let top = offsets.top;
    let left = offsets.left;
    $('.mail').css({
        top: (top + 95) + 'px',
        left: (left - 30) + 'px'
    })
    $('.mail').fadeIn('200');
});
$("[alt='Mail Contact']").mouseout(function () {
    $('.mail').fadeOut('200');
});

document.querySelectorAll('a.image-container').forEach(container => {
    if (container.lastChild.alt !== 'Whatsapp Contact') return
    let wp = container;
    if (mobileCheck()) wp.href = 'whatsapp://send?phone=5491165601091'
    if (!mobileCheck()) wp.href = 'https://api.WhatsApp.com/send?phone=5491165601091'

})

document.querySelector(".resume").addEventListener("click", () => {
    window.location = "./Resources/Joaquin Paz Resume.pdf"
})