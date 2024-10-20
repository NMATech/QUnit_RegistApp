const modalRegister = document.getElementById("modalRegister");
const btnRegister = document.getElementById("btnRegister");
const btnContinue = document.getElementById("btnContinue");

const showModalRegister = () => {
  if (modalRegister.classList.contains("hidden")) {
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex");
  } else {
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
  }
};

btnRegister.addEventListener("click", () => {
  showModalRegister();
});

btnContinue.addEventListener("click", () => {
  showModalRegister();
});
