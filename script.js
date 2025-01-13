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
const glitchOverlay = document.getElementById('glitch-overlay');
const glitchCtx = glitchOverlay.getContext('2d');

function resizeGlitchOverlay() {
    glitchOverlay.width = window.innerWidth;
    glitchOverlay.height = window.innerHeight;
}

resizeGlitchOverlay();
window.addEventListener('resize', resizeGlitchOverlay);

function drawGlitchLine() {
    glitchCtx.clearRect(0, 0, glitchOverlay.width, glitchOverlay.height);
    
    const lineHeight = Math.random() * 10 + 5;
    const y = Math.random() * glitchOverlay.height;
    
    glitchCtx.fillStyle = Math.random() < 0.5 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    glitchCtx.fillRect(0, y, glitchOverlay.width, lineHeight);
}

function glitchEffect() {
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(drawGlitchLine, i * 50);
        }
    }, Math.random() * 5000 + 2000);
}

glitchEffect();

// Fade in image after 1 minute
setTimeout(() => {
    const fadeInImage = document.getElementById('fade-in-image');
    fadeInImage.style.opacity = '1';
}, 60000);
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const notificationPopup = document.getElementById('notification-popup');

    // Fetch the notification HTML file
    fetch('notification-source.html') // Updated file name
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const notificationContent = tempDiv.querySelector('#notification-content');

            // Update the notification content
            if (notificationContent) {
                notificationPopup.innerHTML = notificationContent.innerHTML + '<button id="close-notification">Close</button>';

                // Re-assign close button functionality
                document.getElementById('close-notification').addEventListener('click', function () {
                    notificationPopup.style.display = 'none';
                });

                // Show the popup
                notificationPopup.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error loading notification:', error);
            notificationPopup.innerHTML = `<p style="color: red;">Failed to load notification!</p>`;
        });
});
