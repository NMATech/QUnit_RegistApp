QUnit.module("Module Register", function (hooks) {
  let message = document.getElementById("message");
  let modalRegister = document.getElementById("modalRegister");

  hooks.beforeEach(() => {
    message.textContent = "";
  });

  QUnit.test("All field are required", (assert) => {
    const form = document.getElementById("formRegister");
    const event = new Event("submit");

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";

    form.dispatchEvent(event);

    assert.equal(
      message.textContent,
      "All fields are required!",
      "Message error should be called for empty field"
    );
  });

  QUnit.test("Specification test domain field name", (assert) => {
    const datas = [
      {
        name: "Olatunji Olajide olayinka alex william",
        age: 21,
        email: "ksiofficial@gmail.com",
        phone: "0896555684",
        password: "Password#123",
      },
      {
        name: "Vikstar123",
        age: 21,
        email: "test123@gmail.com",
        phone: "0859555232",
        password: "Password#123",
      },
    ];

    datas.map((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("password").value = data.password;

      const form = document.getElementById("formRegister");
      const event = new Event("submit");

      form.dispatchEvent(event);

      if (data.name === "Vikstar123") {
        assert.equal(
          message.textContent,
          "Field name can only contains string!",
          `Registered shouldn't successed for this name ${data.name}`
        );
      } else {
        assert.equal(
          message.textContent,
          "Field name can only contains 35 characters!",
          `Registered shouldn't successed for this name ${data.name}`
        );
      }
    });
  });

  QUnit.test("Boundary test domain field age", (assert) => {
    // Data test
    const datas = [
      {
        name: "Maximan",
        age: 17,
        email: "maximan@gmail.com",
        phone: "0815555411",
        password: "Password#123",
      },
      {
        name: "Alex",
        age: 18,
        email: "alex@gmail.com",
        phone: "0898555413",
        password: "Password#123",
      },
      {
        name: "John Cena",
        age: 45,
        email: "cenaofficial@gmail.com",
        phone: "0896555537",
        password: "Password#123",
      },
      {
        name: "Olatunji",
        age: 46,
        email: "olatunji@gmail.com",
        phone: "0878555985",
        password: "Password#123",
      },
    ];

    datas.map((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("password").value = data.password;

      const form = document.getElementById("formRegister");
      const event = new Event("submit");

      form.dispatchEvent(event);

      if (data.age >= 18 && data.age <= 45) {
        assert.ok(
          modalRegister.classList.contains("flex"),
          `Registration should succeed for age ${data.age}`
        );
      } else {
        assert.equal(
          message.textContent,
          "Your age should be at least around 18 - 45!",
          "Registered shouldn't be success"
        );
      }
    });
  });

  QUnit.test("Specification test domain field email", (assert) => {
    const datas = [
      {
        name: "Simon Minter",
        age: 29,
        email: "simonminter@yahoo.com",
        phone: "0819555492",
        password: "Password#123",
      },
      {
        name: "Harry",
        age: 27,
        email: "harrylewis.com",
        phone: "0854555895",
        password: "Password#123",
      },
    ];

    datas.map((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("password").value = data.password;

      const form = document.getElementById("formRegister");
      const event = new Event("submit");

      form.dispatchEvent(event);

      assert.equal(
        message.textContent,
        "Your email format should be @gmail.com!",
        `Registered shouldn't be successed for this email ${data.email}`
      );
    });
  });

  QUnit.test("Specification test domain field phone", (assert) => {
    const datas = [
      {
        name: "Joshua",
        age: 31,
        email: "joshua@gmail.com",
        phone: "081955599",
        password: "Password#123",
      },
      {
        name: "Tobi Brown",
        age: 28,
        email: "tobibrown@gmail.com",
        phone: "08115554071",
        password: "Password#123",
      },
      {
        name: "Randy",
        age: 30,
        email: "randydolp@gmail.com",
        phone: "08785558822456",
        password: "Password#123",
      },
      {
        name: "Ethan Bezh",
        age: 29,
        email: "bezhinga@gmail.com",
        phone: "445555631773",
        password: "Password#123",
      },
    ];

    const phonePattern = /^08\d{8,12}$/; // Memperbaiki pola regex

    datas.forEach((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("password").value = data.password;

      const form = document.getElementById("formRegister");
      const event = new Event("submit");

      form.dispatchEvent(event);

      const phoneValid = phonePattern.test(data.phone);
      const phoneLengthValid =
        data.phone.length >= 10 && data.phone.length <= 13;

      if (phoneLengthValid && phoneValid) {
        assert.ok(
          modalRegister.classList.contains("flex"),
          `Registration should succeed for this phone ${data.phone}`
        );
      } else {
        if (!phoneLengthValid) {
          assert.equal(
            message.textContent,
            "Your number should be around 10 - 13 characters!",
            `Registered shouldn't be successed for this phone ${data.phone}`
          );
        } else if (!phoneValid) {
          assert.equal(
            message.textContent,
            "Your number format doesn't acceptable!",
            `Registered shouldn't be successed for this phone ${data.phone}`
          );
        }
      }
    });
  });

  QUnit.test("Register with email that already registered", (assert) => {
    const data = {
      name: "Foxy Brown",
      age: 25,
      email: "tobibrown@gmail.com", // This email already registered in previous test
      phone: "08115134407",
      password: "Password#123",
    };

    document.getElementById("name").value = data.name;
    document.getElementById("age").value = data.age;
    document.getElementById("email").value = data.email;
    document.getElementById("phone").value = data.phone;
    document.getElementById("password").value = data.password;

    const form = document.getElementById("formRegister");
    const event = new Event("submit");

    form.dispatchEvent(event);

    assert.equal(
      message.textContent,
      "Your email already registered!",
      "They can't register with email that already registered"
    );
  });

  QUnit.test("Specification test domain field password", (assert) => {
    const datas = [
      {
        name: "Lexyan",
        age: 21,
        email: "lexlexy@gmail.com",
        phone: "085880046909",
        password: "password123",
      },
      {
        name: "Paul",
        age: 24,
        email: "paul@gmail.com",
        phone: "08588004430",
        password: "pass123",
      },
    ];

    datas.map((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("password").value = data.password;

      const form = document.getElementById("formRegister");
      const event = new Event("submit");

      form.dispatchEvent(event);

      if (data.password.length < 8) {
        assert.equal(
          message.textContent,
          "Password should be at least 8 characters!",
          `Registered can't be success with this password ${data.password}`
        );
      } else {
        assert.equal(
          message.textContent,
          "Password should include capital, symbols, and number!",
          `Registered can't be success with this password ${data.password}`
        );
      }
    });
  });
});

QUnit.module("Modul Testing Login", function (hooks) {
  let messageLogin, modalLogin;

  hooks.beforeEach(() => {
    messageLogin = document.getElementById("messageLogin");
    modalLogin = document.getElementById("modalLogin");
    document.getElementById("emailLogin").value = "";
    document.getElementById("passwordLogin").value = "";
    messageLogin.textContent = ""; // Reset message before each test
  });

  QUnit.test("All fields are required", (assert) => {
    const form = document.getElementById("formLogin");
    const event = new Event("submit");

    document.getElementById("emailLogin").value = "";
    document.getElementById("passwordLogin").value = "";

    form.dispatchEvent(event);

    assert.equal(
      messageLogin.textContent,
      "All fields are required!",
      "User can't login if the fields are empty"
    );
  });

  QUnit.test("Login with valid credentials", (assert) => {
    const data = {
      email: "tobibrown@gmail.com",
      password: "Password#123",
    };

    document.getElementById("emailLogin").value = data.email;
    document.getElementById("passwordLogin").value = data.password;

    const form = document.getElementById("formLogin");
    const event = new Event("submit");

    form.dispatchEvent(event);

    assert.ok(
      localStorage.getItem("user"),
      `Login should be succeed for this data ${JSON.stringify(
        data
      )}, and localstorage with key user should exist`
    );
    assert.ok(
      modalLogin.classList.contains("flex"),
      `After login success, modal success should appear`
    );
  });

  QUnit.test("Login with invalid credentials", (assert) => {
    const data = {
      email: "tobibrown@gmail.com",
      password: "password123",
    };

    document.getElementById("emailLogin").value = data.email;
    document.getElementById("passwordLogin").value = data.password;

    const form = document.getElementById("formLogin");
    const event = new Event("submit");

    form.dispatchEvent(event);

    assert.equal(
      messageLogin.textContent,
      "Your email and password doesn't match!",
      "Login shouldn't be success with invalid credentials"
    );
  });
});
