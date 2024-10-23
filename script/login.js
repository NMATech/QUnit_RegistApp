const btnEye = document.getElementById("btnEye");
const btnLogin = document.getElementById("btnLogin");
const btnRedirect = document.getElementById("btnRedirect");
const iconEye = document.getElementById("iconEye");
const modalLogin = document.getElementById("modalLogin");

const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const messageLogin = document.getElementById("messageLogin");
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
  let isValid = false;

  if (!emailLogin.value || !passwordLogin.value) {
    messageLogin.textContent = "All fields are required!";
  }

  users.forEach((user) => {
    if (
      emailLogin.value === user.email &&
      passwordLogin.value === user.password
    ) {
      const data = {
        name: user.name,
        age: user.age,
        email: user.email,
        phone: user.phone,
        password: user.password,
      };

      localStorage.setItem("user", JSON.stringify(data));
      isValid = true;
      showModalLogin();
    }
  });

  if (!isValid) {
    messageLogin.textContent = "Your email and password doesn't match!";
  }
};

btnEye.addEventListener("click", () => {
  if (passwordLogin.type === "password") {
    passwordLogin.type = "text";
    iconEye.src = "../assets/icon/hide.png";
  } else {
    passwordLogin.type = "password";
    iconEye.src = "../assets/icon/view.png";
  }
});

btnRedirect.addEventListener("click", () => {
  window.location.href = "../index.html";
});

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  login();
});
