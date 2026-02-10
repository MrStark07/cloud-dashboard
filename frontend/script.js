// ===============================
// BACKEND DATA FETCH
// ===============================
async function loadStatus() {
  try {
    const response = await fetch("http://localhost:3000/api/status");
    const data = await response.json();

    document.getElementById("status").innerText = data.status;
    document.getElementById("pod").innerText = data.pod;
    document.getElementById("time").innerText = data.time;
  } catch (error) {
    document.getElementById("status").innerText = "Backend not reachable";
  }
}

// Refresh every 3 seconds
loadStatus();
setInterval(loadStatus, 3000);


// ===============================
// PARTICLE BACKGROUND EFFECT
// ===============================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const PARTICLE_COUNT = 80;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6,
    r: Math.random() * 2 + 1
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
