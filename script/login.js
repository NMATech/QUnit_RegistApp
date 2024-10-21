const btnPassword = document.getElementById("btnPassword");
const btnLogin = document.getElementById("btnLogin");
const btnContinue = document.getElementById("btnContinue");
const iconPassword = document.getElementById("iconPassword");
const modalLogin = document.getElementById("modalLogin");

const email = document.getElementById("email");
const password = document.getElementById("password");
const formLogin = document.getElementById("formLogin");

const showModalLogin = () => {
  if (modalLogin.classList.contains("hidden")) {
    modalLogin.classList.remove("hidden");
    modalLogin.classList.add("flex");
  } else {
    modalLogin.classList.remove("flex");
    modalLogin.classList.add("hidden");
  }
};

const login = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  users.map((user) => {
    if (email.value === user.email && password.value === user.password) {
      const data = {
        name: user.name,
        age: user.age,
        email: user.email,
        phone: user.phone,
        password: user.password,
      };

      localStorage.setItem("user", JSON.stringify(data));
      showModalLogin();
    }
  });
};

btnPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    iconPassword.src = "../assets/icon/hide.png";
  } else {
    password.type = "password";
    iconPassword.src = "../assets/icon/view.png";
  }
});

btnContinue.addEventListener("click", () => {
  window.location.href = "../index.html";
});

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  login();
});
