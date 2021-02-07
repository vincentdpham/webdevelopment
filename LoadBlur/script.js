const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30) // Every 30ms, perform blurring function

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int) // Stop the int setInterval
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) // Opacity goes from 0 to 1, not 0 to 100. Need to map range of numbers to another range of numbers.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // !!!! Use tilde instead of '
    
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }