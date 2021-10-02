const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') // splits letters into an array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // mapping an array to add span around each letter
        .join('') // turning it back into the string
})