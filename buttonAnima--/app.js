function explodeButton(button) {
  function getRandomNeonColor() {
    const colors = [
      "rgb(0, 255, 255)",
      "rgb(255, 0, 255)",
      "rgb(255, 255, 255)",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const numParticles = 500;
  const explosionArea = document.querySelector(".explosion-container");
  explosionArea.innerHTML = "";

  // Get the button's dimension and position
  const rect = button.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 100 + 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const color = getRandomNeonColor();

    // Set initial position to the center of the button
    particle.style.left = `${centerX + x}px`;
    particle.style.top = `${centerY + y}px`;

    particle.style.background = color;

    // Animation end state
    setTimeout(() => {
      particle.style.transform = `translate(${x}px, ${y}px) scale(0)`;
      particle.style.opacity = 0;
    }, 10);

    explosionArea.appendChild(particle);
  }

  // Disable button after explosion
  button.disabled = true;
  button.style.opacity = 0;

  // Enable button
  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = 1;
  }, 500);
}