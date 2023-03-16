const head = document.getElementById("head");
const ears = document.getElementById("ears");
const eyes = document.getElementById("eyes");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

let cursorPosition = { x: 0, y: 0 };

function screenSize() {
  let windowWidth = window.innerWidth;
  let windowHeigth = window.innerHeight;
}

function mouseMovement(e) {
  cursorPosition = { x: e.clientX, y: e.clientY };
  movementBear();
}

function touchMove(e) {
  cursorPosition = {
    x: e.targetTouches[0].offsetX,
    y: e.targetTouches[0].offsetY,
  };
  movementBear();
}
const followCursor = (elemento, xrelacion, yrelacion) => {
  const elementoOffset = elemento.getBoundingClientRect();
  const centerX = elementoOffset.x + elementoOffset.width / 2;
  const centerY = elementoOffset.y + elementoOffset.height / 2;
  const distanceLeft = Math.round(
    ((cursorPosition.x - centerX) * 100) / window.innerWidth
  );

  const distanceTop = Math.round(
    ((cursorPosition.y - centerY) * 100) / window.innerHeight
  );

  elemento.style.transform = `translate(${distanceLeft / xrelacion}px, ${
    distanceTop / yrelacion
  }px
  )`;
};

const movementBear = () => {
  if (ears) followCursor(ears, 0, 0);
  if (head) followCursor(head, 6, 6);
  if (eyes) followCursor(eyes, 1.8, 1.8);
  if (snout) followCursor(snout, 2.0, 2.0);
  if (nose) followCursor(nose, 1, 1);
};

const init = () => {
  window.addEventListener("resize", screenSize);
  window.addEventListener("mousemove", mouseMovement);
  window.addEventListener("touchmove", touchMove);
};

init();
