const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const scenes = document.querySelectorAll(".hero, .wide-scene");
let pendingFrame = false;

function moveScenes() {
  pendingFrame = false;
  for (const scene of scenes) {
    const offset = scene.getBoundingClientRect().top;
    const movement = Math.max(-18, Math.min(18, offset * -0.08));
    scene.style.setProperty("--frame-y", movement + "px");
  }
}

window.addEventListener("scroll", () => {
  if (!pendingFrame && !motionPreference.matches) {
    pendingFrame = true;
    window.requestAnimationFrame(moveScenes);
  }
}, { passive: true });
