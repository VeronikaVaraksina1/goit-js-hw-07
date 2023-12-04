const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const writeName = () => {
  const currentName = event.currentTarget.value.trim();
  nameOutput.textContent = currentName.trim();

  if (currentName === "") {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", writeName);
