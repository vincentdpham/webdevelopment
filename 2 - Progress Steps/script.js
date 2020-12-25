const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') // . before circle means take all circles

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    //console.log(currentActive)

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
    //console.log(currentActive)
})

function update() {
    // Essentially checks what number the user is at and makes all circles less than it have a blue border
    circles.forEach((circle, idx) => {
        if(idx < currentActive) { // Is index of current circle less than active?
            circle.classList.add('active')
        }   else    {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    //console.log((actives.length / circles.length) * 100) 
    progress.style.width = (actives.length - 1)/ (circles.length - 1) * 100 + '%'

    if(currentActive == 1){
        prev.disabled = true
    } else if(currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}