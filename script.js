* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    font-family: 'Roboto Mono', monospace;
    background-color: #000;
    color: #0f0;
    overflow: hidden;
}

#glitch-container {
    position: relative;
    width: 100%;
    height: 100%;
}

#background-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 20px;
}

#name {
    font-family: 'Orbitron', sans-serif;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
}

#description {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 40px;
    line-height: 1.6;
}

.links {
    display: flex;
    gap: 20px;
}

.links a {
    text-decoration: none;
    color: #0f0;
    padding: 10px 20px;
    font-size: 0.9rem;
    background-color: transparent;
    border: 1px solid #0f0;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 255, 0, 0.2),
        transparent
    );
    transition: 0.5s;
}

.links a:hover::before {
    left: 100%;
}

.links a:hover {
    background-color: rgba(0, 255, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.glitch {
    animation: glitch 0.5s infinite;
}

@keyframes glitch {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-5px, 5px);
    }
    40% {
        transform: translate(-5px, -5px);
    }
    60% {
        transform: translate(5px, 5px);
    }
    80% {
        transform: translate(5px, -5px);
    }
    100% {
        transform: translate(0);
    }
}
