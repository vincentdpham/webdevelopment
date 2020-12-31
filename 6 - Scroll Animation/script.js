const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 // Can't used fixed number due to varied heights depending on user

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top // Gives info about rectangle, including where it is

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}