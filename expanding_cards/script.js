/* we have to change the classes from inactive to active */
const panels = document.querySelectorAll('.panel') /* selects all panels and puts them into a node list (similar to array) */

panels.forEach((panel) => { /* loops through each panel */
    panel.addEventListener('click', () => { /* on whatever picture we click, function adds a class of active and removes the class from the all other pictures */
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}