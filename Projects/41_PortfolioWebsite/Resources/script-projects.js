const projectLinks = document.querySelectorAll('[data-project-image]')

projectLinks.forEach(link => {
    link.addEventListener('click', (evt) => {
        window.open(evt.target.dataset.projectImage, '_blank');
    })
})

document.addEventListener('swiped-right', () => {
    document.querySelector('[data-carrousel-button = "prev"]').click()
    console.log('swiped-right')
})
document.addEventListener('swiped-left', () => {
    document.querySelector('[data-carrousel-button = "next"]').click()
    console.log('swiped-left')
})