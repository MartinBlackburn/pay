// variable
const CIRCLES = 150;

// Set up canvas
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set display size and scale as needed
canvas.style.width = window.outerWidth + "px";
canvas.style.height = window.innerHeight + "px";

const scale = window.devicePixelRatio;
canvas.width = window.outerWidth * scale;
canvas.height = window.innerHeight * scale;

ctx.scale(scale, scale);

let circles = [];

// random int between a range
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// random float between a range
const randomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
};

const createCircle = () => {
    const circle = {
        position: {
            x: getRandomInt(0, canvas.width / scale),
            y: getRandomInt(0, canvas.height / scale),
        },
        size: getRandomInt(1, 3),
        opacity: randomFloat(0, 0.8),
        moveSpeed: randomFloat(0.05, 0.1),
        fadeSpeed: randomFloat(0.001, 0.002),
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        xDirection: Math.random() > 0.5 ? 1 : -1,
        YDirection: Math.random() > 0.5 ? 1 : -1,
    };

    circles.push(circle);
};

const drawCircles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.position.x, circle.position.y, circle.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${circle.opacity})`;
        ctx.fill();

        let newX = circle.position.x + circle.moveSpeed * circle.xDirection;
        let newY = circle.position.y + circle.moveSpeed * circle.YDirection;
        let newOpacity = circle.opacity + circle.fadeSpeed * circle.fadeDirection;

        if (newX < 0 || newX > canvas.width / scale) {
            circle.xDirection *= -1;
        }

        if (newY < 0 || newY > canvas.height / scale) {
            circle.YDirection *= -1;
        }

        if (newOpacity < 0 || newOpacity > 0.8) {
            circle.fadeDirection *= -1;
        }

        circle.position.x = newX;
        circle.position.y = newY;
        circle.opacity = newOpacity;
    });

    requestAnimationFrame(drawCircles);
};

for (let i = 0; i < CIRCLES; i++) {
    createCircle();
}

requestAnimationFrame(drawCircles);
