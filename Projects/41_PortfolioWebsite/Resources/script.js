const animated = document.querySelectorAll('[data-animated]')

animated.forEach(e => {
    e.addEventListener('mouseleave', async () => {
        const lines = e.children[0].children
        lines[0].style.transitionDelay = '600ms'
        lines[1].style.transitionDelay = '400ms'
        lines[2].style.transitionDelay = '200ms'
        lines[3].style.transitionDelay = '0ms'
        await new Promise(r => setTimeout(r, 600));
        for (const line of lines) {
            line.style.transitionDelay = ''
        }
    })
})