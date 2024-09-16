window.onload = function () {
    const canvas = document.createElement("canvas");
    document.getElementById("background-canvas").appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.onresize = function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    const stars = [];

    // Star class to create individual stars
    class Star {
        constructor(x, y, radius, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        // Draw the star on the canvas
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
        }

        // Update star position
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around when stars go off-screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
    }

    // Function to create stars
    function createStars() {
        for (let i = 0; i < 150; i++) {
            const radius = Math.random() * 2 + 1;
            const x = Math.random() * width;
            const y = Math.random() * height;
            const speedX = (Math.random() - 0.5) * 0.5;
            const speedY = (Math.random() - 0.5) * 0.5;
            stars.push(new Star(x, y, radius, speedX, speedY));
        }
    }

    // Function to animate stars
    function animateStars() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animateStars);
    }

    // Create and animate the stars
    createStars();
    animateStars();
};
