function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputOfNumber = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    const elements = [];

    for (let i = 0; i < amount; i++) {
      size += 10;

      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;

      elements.push(box);
    }

    boxesContainer.append(...elements);
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

btnCreate.addEventListener("click", () => {
  destroyBoxes();
  const amount = inputOfNumber.value;
  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
