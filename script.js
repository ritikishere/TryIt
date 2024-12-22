const canvas = document.getElementById('gameCanvas');
const c = canvas.getContext('2d');

// Set canvas size to match CSS styling
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const gravity = 0.1;

class Fruit {
    constructor() {
        this.position = {
            x: Math.random() * canvas.width,
            y: canvas.height,
        };
        this.velocity = {
            x: 4, // Random horizontal velocity
            y: Math.random() * 2 + 9, // Initial upward velocity
        };
        this.width = 50;
        this.height = 50;
        this.gravity = gravity;
        this.visible = true; // Visibility flag
    }

    draw() {
        if (this.visible) {
            c.fillStyle = "yellow";
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        if (this.visible) {
            this.position.y -= this.velocity.y;
            this.position.x += this.velocity.x;
            this.velocity.y -= this.gravity;

            // Wall bounce logic
           




            this.draw();
        }
    }
}

const fruits = [];
for (let i = 0; i < 6; i++) {
    fruits.push(new Fruit());
}

let isDragging = false;
let lastMousePosition = null;
let currentMousePosition = { x: 0, y: 0 };

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Update fruits
    fruits.forEach((fruit) => fruit.update());

    // Draw slicing line
    if (isDragging && lastMousePosition) {

        c.beginPath();
        c.moveTo(lastMousePosition.x, lastMousePosition.y);
        c.lineTo(currentMousePosition.x, currentMousePosition.y);
        c.strokeStyle = "aqua";
        c.lineWidth = 6;
        c.lineJoin = "round";
        c.lineCap = "round";
        c.shadowColor = "white";
        c.shadowBlur = 20;
        c.stroke();

        // Check for fruit collision
        fruits.forEach((fruit) => {
            if (
                fruit.visible &&
                currentMousePosition.x > fruit.position.x &&
                currentMousePosition.x < fruit.position.x + fruit.width &&
                currentMousePosition.y > fruit.position.y &&
                currentMousePosition.y < fruit.position.y + fruit.height
            ) {
                fruit.visible = false; // Hide the fruit
            }
        });
    }

    // Update lastMousePosition to currentMousePosition
    if (isDragging) {
        lastMousePosition = { ...currentMousePosition };
    }
}

canvas.addEventListener("mousedown", (event) => {
    isDragging = true;
    currentMousePosition = getMousePos(event);
    lastMousePosition = { ...currentMousePosition };
});

canvas.addEventListener("mousemove", (event) => {
    if (isDragging) {
        currentMousePosition = getMousePos(event);
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false;
    lastMousePosition = null; // Reset last position
});

// Function to get mouse position relative to the canvas
function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

// Touch support (for mobile devices)
canvas.addEventListener("touchstart", (event) => {
    isDragging = true;
    const touch = event.touches[0];
    currentMousePosition = getTouchPos(touch);
    lastMousePosition = { ...currentMousePosition };
});

canvas.addEventListener("touchmove", (event) => {
    if (isDragging) {
        const touch = event.touches[0];
        currentMousePosition = getTouchPos(touch);
    }
});

canvas.addEventListener("touchend", () => {
    isDragging = false;
    lastMousePosition = null; // Reset last position
});

// Function to get touch position relative to the canvas
function getTouchPos(touch) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
    };
}

animate();















// SidebarSetup:)

const sidebar = document.getElementById("sidebar");
const togglebtn = document.getElementById("togglebtn");

sidebar.style.left = "-15vw"
togglebtn.style.left = "0px"
navbar.style.left = "-15vw"



togglebtn.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-15vw"
    } else {
        sidebar.style.left = "0px"
    }
});

togglebtn.addEventListener("click", () => {
    if (togglebtn.style.left === "0px") {
        togglebtn.style.left = "12vw"
    } else {
        togglebtn.style.left = "0px"
    }
});

togglebtn.addEventListener("click", () => {
    if (navbar.style.left === "0px") {
        navbar.style.left = "-15vw"
    } else {
        navbar.style.left = "0px"
    }
});      




const topbar = document.getElementById("topbar");
const fogglebtn = document.getElementById("fogglebtn");

topbar.style.up = "-9vh"
fogglebtn.style.up = "0px"



fogglebtn.addEventListener("click", () => {
    if (topbar.style.up === "0px") {
        topbar.style.up = "-9vh"
    } else {
        top.style.up = "0px"
    }
});

fogglebtn.addEventListener("click", () => {
    if (fogglebtn.style.up === "0px") {
        fogglebtn.style.up = "12vh"
    } else {
        fogglebtn.style.up = "0px"
    }
});
