let starInterval;

function spawnStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  star.style.right = "-50px";
  star.style.top = Math.random() * window.innerHeight + "px";

  document.getElementById("stars-container").appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

function startSpawning() {
  if (!starInterval) {
    starInterval = setInterval(() => {
      if (!document.hidden) {
        spawnStar();
      }
    }, 2000);
  }
}

function stopSpawning() {
  clearInterval(starInterval);
  starInterval = null;
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopSpawning();
  } else {
    startSpawning();
  }
});

startSpawning();
