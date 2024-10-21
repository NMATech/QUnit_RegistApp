// Button or ui
const modalRegister = document.getElementById("modalRegister");
const btnRegister = document.getElementById("btnRegister");
const btnContinue = document.getElementById("btnContinue");
const btnPassword = document.getElementById("btnPassword");
const iconPassword = document.getElementById("iconPassword");

// Form
const formRegister = document.getElementById("formRegister");

// Input elemen
const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const message = document.getElementById("message");

// Function
const showModalRegister = () => {
  if (modalRegister.classList.contains("hidden")) {
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex");
  } else {
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
  }
};

const checkingValidation = () => {
  const dataInput = {
    name: name.value,
    age: age.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };

  // Check name
  const num = "012345667889";
  if (dataInput.name.length > 35) {
    message.textContent = "Field name can only contains 35 characters!";
    return false;
  }
  for (let i = 0; i < dataInput.name.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (dataInput.name[i] == num[j]) {
        message.textContent = "Field name can only contains string!";
        return false;
      }
    }
  }

  // Check age
  if (dataInput.age < 18 || dataInput.age > 45) {
    message.textContent = "Your age should be between 18 and 45!";
    return false;
  }

  // Check email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(dataInput.email)) {
    message.textContent = "Your email format should be @gmail.com!";
    return false;
  }

  // Check phone
  if (dataInput.phone.length < 10 || dataInput.phone.length > 13) {
    message.textContent = "Your number should be around 10 - 13 characters!";
    return false;
  }
  const phonePattern = /^'08'+[0-9]$/;
  if (!phonePattern.test(dataInput.phone)) {
    message.textContent = "Your number format doesn't acceptable!";
    return false;
  }

  // Check password
  if (dataInput.password.length < 8) {
    message.textContent = "Password should be at least 8 characters!";
    return false;
  }

  return true;
};

const register = (event) => {
  let users = JSON.parse(localStorage.getItem("users"));

  if (users) {
    users.push({
      name: name.value,
      age: age.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    });
  } else {
    users = [
      {
        name: name.value,
        age: age.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      },
    ];
  }

  localStorage.setItem("users", JSON.stringify(users));
  showModalRegister();
};

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  const check = checkingValidation();

  if (check) {
    register();
  }
});

document.getElementById("btnContinue").addEventListener("click", () => {
  window.location.href = "../pages/login.html";
});

btnPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    iconPassword.src = "../assets/icon/hide.png";
  } else {
    password.type = "password";
    iconPassword.src = "../assets/icon/view.png";
  }
});
