function randomGlitch() {
    const name = document.getElementById('name');
    const glitchInterval = Math.random() * 7000 + 1000;

    setTimeout(() => {
        name.classList.add('glitch');
        setTimeout(() => {
            name.classList.remove('glitch');
            randomGlitch();
        }, 500);
    }, glitchInterval);
}

randomGlitch();
