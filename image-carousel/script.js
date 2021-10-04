const imgs = document.getElementById('imgs')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) { /* if we reach the end of list, go back to beginning */
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)` /* moves the image */
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightButton.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftButton.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})