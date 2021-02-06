const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    // input.split(',') uses , as delimiter and splits into array
    // filter(tag => tag.trim() != '') filter each tag by first confirming trimming the tag won't result in nothing. If true, trim it. Filter returns things if conditional is true
    // map = manipulate array
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })

    console.log(tags)
    //console.log(input)
}

function randomSelect() {
    const times = 30 // number of times it's going to highlight each one before it stops
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') // grab all spans
    return tags[Math.floor(Math.random() * tags.length)] // Node. Not array
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}