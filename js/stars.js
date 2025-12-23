let starInterval;
const container = document.getElementById("stars-container");
const STAR_LIFETIME = 2000;
const SPAWN_DELAY = 3000;

function spawnStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  star.style.right = "-5rem";
  star.style.top = Math.random() * window.innerHeight + "px";

  container.appendChild(star);

  setTimeout(() => star.remove(), STAR_LIFETIME);
}

function startSpawning() {
  if (!starInterval) {
    starInterval = setInterval(() => {
      if (!document.hidden) spawnStar();
    }, SPAWN_DELAY);
  }
}

function stopSpawning() {
  clearInterval(starInterval);
  starInterval = null;
}

document.addEventListener("visibilitychange", () => {
  document.hidden ? stopSpawning() : startSpawning();
});

startSpawning();
