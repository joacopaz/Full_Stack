const buttons = document.querySelectorAll('[data-carrousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carrouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carrousel]').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        const nextSlide = slides.children[newIndex]
        if (offset === 1) {
            activeSlide.style.animationName = 'exitLeft'
            nextSlide.style.animationName = 'enterLeft'
        } else {
            activeSlide.style.animationName = 'exitRight'
            nextSlide.style.animationName = 'enterRight'
        }

        nextSlide.dataset.active = true
        delete activeSlide.dataset.active
    })
})