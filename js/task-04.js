const test = document.querySelector(".login-form");

const response = {};

const loginForm = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = new FormData(event.target);
  data.forEach((value, key) => {
    response[key] = value.trim();
  });

  console.log(response);

  test.reset();
};

test.addEventListener("submit", loginForm);
