// Animate the small balls to orbit around the ring
const numBalls = 10;
const centerContainer = document.querySelector(".center-container");
const ring = document.querySelector(".ring");
const balls = Array.from(document.querySelectorAll(".small-circle"));
// speed of the balls, some negative so they go backwards
const baseSpeed = 0.0001;
const speeds = [
  baseSpeed * 1.0,
  baseSpeed * 1.2,
  -baseSpeed * 0.8,
  baseSpeed * 1.5,
  -baseSpeed * 1.1,
  baseSpeed * 0.7,
  -baseSpeed * 1.3,
  baseSpeed * 0.9,
  baseSpeed * 1.2,
  -baseSpeed * 1.1,
];

function animateOrbit() {
  const containerRect = centerContainer.getBoundingClientRect();
  const ringRect = ring.getBoundingClientRect();
  // Calculate the center of the ring relative to the center-container
  const centerX = ringRect.left - containerRect.left + ringRect.width / 2;
  const centerY = ringRect.top - containerRect.top + ringRect.height / 2;
  const radius = ringRect.width / 2;
  const ballRadius = balls[0].offsetWidth / 2;
  const orbitRadius = radius; // center of balls on ring
  const now = Date.now();

  balls.forEach((ball, i) => {
    const angle = ((2 * Math.PI) / numBalls) * i + now * speeds[i];
    const x = centerX + orbitRadius * Math.cos(angle) - ballRadius;
    const y = centerY + orbitRadius * Math.sin(angle) - ballRadius;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.transform = "none";
  });

  requestAnimationFrame(animateOrbit);
}

animateOrbit();
