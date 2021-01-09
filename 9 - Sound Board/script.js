const sounds = ['Oh', 'Over', 'We', 'When', 'Why', 'Why2', 'Wushu', 'All', 'T', 'Get', 'Cant']
var overlap = 0

const btn2 = document.createElement('button')
btn2.classList.add('btn')
btn2.innerText = "Overlap Off"
document.getElementById('buttons').appendChild(btn2)

btn2.addEventListener('click', () => {
    if(overlap == 0){
        overlap = 1
        btn2.innerText = "Overlap On"
        btn2.setAttribute("on")
    }
    else
    {
        btn2.innerText = "Overlap Off"
        overlap = 0
        btn2.setAttribute("off")
    }
})

sounds.forEach(sound => {
    const btn = document.createElement('button') // Create button for each sound
    btn.classList.add('btn')

    btn.innerText = sound // Text in button matches defined names above

    btn.addEventListener('click', () => {
        if(overlap == 0){
            stopSongs()
        }
        
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}