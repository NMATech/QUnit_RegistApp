const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const checkToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "./pages/login.html";
  } else {
    name.textContent = user.name;
    age.textContent = user.age;
    email.textContent = user.email;
    phone.textContent = user.phone;
  }
};
