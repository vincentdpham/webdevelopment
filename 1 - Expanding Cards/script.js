// First we need to bring all the panels into the JS
// const panels = document.querySelector('.panel') // Lets you select anything on page. Can't use this though since there's multiple panels. Doing this will only affect the first panel.
const panels = document.querySelectorAll('.panel') // Puts all the panels in a node list, or an array
// console.log(panels) Displays array on Console tab on developer mode for browser
//console.log(panels[0]) 

// Loop through list. High order array method. Takes in function as an argument. Placing 'panel' here means the loop will be iterating through each 'panel'
panels.forEach((panel) => {
    // console.log(panel) Loop through and go through each panel
    panel.addEventListener('click', () => { // When user clicks, perform this function
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
