function spawnStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  const spawnY =
    Math.random() * (window.innerHeight * 1.5) - window.innerHeight * 0.25;
  star.style.top = spawnY + "px";

  star.style.right = "-50px";

  document.getElementById("stars-container").appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 20000);
}

setInterval(() => {
  spawnStar();
}, 2000);
