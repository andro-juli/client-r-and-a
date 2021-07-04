<template>
  <div id="signup">
    <div class="signup-layout-container">
      <div class="logo-holder">
        <img src="../assets/enyata-logo.svg" alt="" />
      </div>
      <h2 class="applicant-signup">Applicant Sign Up</h2>
      <form @submit.prevent="signupUser" method="post" id="signupForm">
        <div class="form-container">
          <div class="input-container">
            <label for="" class="label">First Name</label>
            <input
              v-model="firstname"
              type="text"
              name="firstname"
              id="fname"
              class="inputs"
              required="true"
            />
          </div>
          <div class="input-container">
            <label for="" class="label">Last Name</label>
            <input
              v-model="lastname"
              type="text"
              id="lname"
              name="lastname"
              class="inputs"
              required="true"
            />
          </div>
          <div class="input-container">
            <label for="" class="label">Email Address</label>
            <input
              v-model="email"
              type="text"
              id="email"
              name="email"
              class="inputs"
            />
          </div>
          <div class="input-container">
            <label for="" class="label">Phone Number</label>
            <input
              v-model="phone"
              type="number"
              id="phone"
              name="phone"
              class="inputs"
              required="true"
            />
          </div>
          <div class="input-container">
            <label for="" class="label">Password</label>
            <input
              v-model="password"
              type="password"
              id="pword"
              name="password"
              class="inputs"
              required="true"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div class="input-container">
            <label for="" class="label">Confirm Passwrod</label>
            <input
              v-model="confirm_password"
              type="password"
              id="confirm_pword"
              name="confirm_password"
              class="inputs"
              required="true"
            />
            <span id="message"></span>
          </div>
        </div>
        <div class="signup-btn-container">
          <button class="signup-btn">Sign Up</button>
        </div>
      </form>
      <div class="redirect">
        <div class="dont-have-account">
          <p>
            Already have an account?
            <a href="Login"><span class="login-redirect"> Sign In</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signup",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      showPassword: false,
    };
  },

  methods: {
    ...mapActions(["Signup"]),
    async signupUser() {
      this.details = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      try {
        const response = await this.Signup(this.details);
        console.log(this.details);
        // JSON.stringify(this.details);
        // this.$router.push("/login");
        this.apiResponse(response);
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },

    apiResponse(response) {
      if (response.status == "success") {
        setTimeout(() => {
          this.$router.push({ name: "Login" });
          response.message = "";
        }, 8000);
      }
    },
  },

  // methods: {
  //   async signupUser() {
  //     const newUser = {
  //       firstname: this.firstname,
  //       lastname: this.lastname,
  //       email: this.email,
  //       phone: this.phone,
  //       password: this.password,
  //       confirm_password: this.confirm_password,
  //     };

  //     const data = JSON.stringify(newUser);

  //     const url = "/api/v1/users/signup";

  //     const response = await fetch(url, {
  //       method: "POST",
  //       mode: "cors",
  //       cache: "no-cache",
  //       credentials: "same-origin",
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: data,
  //     });
  //     console.log(response);
  //     if (response.status === 201) {
  //       alert("Successfully signed up, you can login now");
  //       this.$router.push("Login");
  //     } else {
  //       alert("error occured while signing up");
  //     }
  //     return response.json();
  //   },
  // },
};
</script>

<style scoped>
#signup {
  background: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.signup-layout-container {
  width: 80%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.logo-holder img {
  width: 110.1px;
  height: 20.84px;
}
.logo-holder {
  margin: 10px 0;
}
.applicant-signup {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin: 10px 0;
}
.form-container {
  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
.input-container {
  height: 80px;
  width: 400px;
  margin-right: 30px;
}
.inputs {
  width: 379px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
  padding: 6px;
}
.label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.signup-btn {
  background: #7557d3;
  border-radius: 4px;
  width: 520px;
  height: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.signup-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.redirect p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.login-redirect {
  color: #4a54e7;
}
</style>
