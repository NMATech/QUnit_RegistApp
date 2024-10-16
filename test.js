const contohData = [
  {
    _id: 1,
    name: "Nadindra",
    pass: "43545354",
    email: "nadin@gmail.com",
    phone: "085880046909",
  },
  {
    _id: 2,
    name: "Maul",
    pass: "abcdefghi",
    email: "nadin@gmail.com",
    phone: "085880046909",
  },
  {
    _id: 3,
    name: "Aziz",
    pass: "12345678",
    email: "nadin@gmail.com",
    phone: "085880046909",
  },
];

function pass(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  if (email.includes("@gmail.com")) {
    return true;
  } else {
    return false;
  }
}

QUnit.test("test length password", function (assert) {
  contohData.map((data) => {
    assert.equal(true, pass(data.pass));
  });
});
