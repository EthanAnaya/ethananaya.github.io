function randomGlitch() {
    const name = document.getElementById('name');
    const glitchInterval = Math.random() * 7000 + 1000; // Randomize between 1 and 8 seconds

    setTimeout(() => {
        name.classList.add('glitch');
        setTimeout(() => {
            name.classList.remove('glitch');
            randomGlitch(); // Continue glitching
        }, 500); // Glitch duration
    }, glitchInterval);
}

window.onload = function () {
    randomGlitch();
};
