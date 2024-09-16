window.onload = function () {
    const canvas = document.createElement("canvas");
    document.getElementById("background").appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Resize canvas if window size changes
    window.onresize = function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    const particles = [];

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 5 + 2,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
            });
        }
    }

    function updateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > width) p.speedX *= -1;
            if (p.y < 0 || p.y > height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(updateParticles);
    }

    createParticles();
    updateParticles();
};
