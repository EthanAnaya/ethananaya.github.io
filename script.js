const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];

class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0f0";
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * width;
        }
    }
}

function createStars() {
    for (let i = 0; i < 200; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speed = Math.random() * 0.5 + 0.1;
        stars.push(new Star(x, y, radius, speed));
    }
}

function animateStars() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
        star.update();
        star.draw();
    });

    requestAnimationFrame(animateStars);
}

createStars();
animateStars();

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Glitch effect
function glitchEffect() {
    const glitchContainer = document.getElementById('glitch-container');
    setInterval(() => {
        glitchContainer.classList.add('glitch');
        setTimeout(() => {
            glitchContainer.classList.remove('glitch');
        }, 200);
    }, Math.random() * 5000 + 2000);
}

glitchEffect();
