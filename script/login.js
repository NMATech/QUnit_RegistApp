const btnEye = document.getElementById("btnEye");
const btnLogin = document.getElementById("btnLogin");
const btnRedirect = document.getElementById("btnRedirect");
const iconEye = document.getElementById("iconEye");
const modalLogin = document.getElementById("modalLogin");

const usernameLogin = document.getElementById("usernameLogin");
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

  // Validasi field kosong
  if (!usernameLogin.value || !passwordLogin.value) {
    messageLogin.textContent = "All fields are required!";
    return;
  }

  // Jika data users tidak ditemukan
  if (!users || users.length === 0) {
    messageLogin.textContent = "No registered users found!";
    return;
  }

  // Cek username dan password
  users.forEach((user) => {
    if (
      usernameLogin.value === user.name &&
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
    messageLogin.textContent = "Your username and password doesn't match!";
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
