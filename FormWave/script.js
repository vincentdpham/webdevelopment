const labels = document.querySelectorAll('.form-control label') // Gives us node list of all labels

labels.forEach(label => {
    label.innerHTML = label.innerText // Set to each letter
        .split('') // Split letters into array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // Converting to span so we can style each letter. Don't forget to add ms unit for it to work
        .join('') // Convert back to string after manipulation
})