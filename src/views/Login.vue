<template>
  <div id="login">
    <div class="login-layout-container">
      <!-- <h2 v-if="user">Hi, {{ user.firstname }} {{ user.lastname }}</h2>
      <h2 v-if="!user">Hi, You are not logged in!</h2> -->
      <div class="login-body-container">
        <div class="logo-holder">
          <img src="../assets/enyata-logo.svg" alt="" />
        </div>
        <h2 class="applicant-login">Applicant Log In</h2>
        <form @submit.prevent="loginUser" method="post">
          <div class="form-container">
            <div class="input-container">
              <label for="email" class="label">Email Address</label>
              <input
                v-model="email"
                type="text"
                id="email"
                name="email"
                class="inputs"
              />
            </div>
            <div class="input-container">
              <label for="password" class="label">Password</label>
              <input
                v-model="password"
                type="password"
                id="pword"
                name="password"
                class="inputs"
                placeholder=""
              />
              <i><img src="../assets/eye.svg" alt="toggle-eye" class="eye"/></i>
            </div>
          </div>
          <div class="login-btn-container">
            <button class="login-btn">Login</button>
          </div>
        </form>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
        <div class="redirect">
          <div class="dont-have-account">
            <p>
              Don’t have an account yet?
              <a href="Signup"><span class="signup-redirect"> Sign Up</span></a>
            </p>
          </div>
          <div class="forgot-password"><p>Forgot Password?</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",

      showError: false,
    };
  },

  methods: {
    ...mapActions(["LogIn"]),
    async loginUser() {
      this.User = {
        email: this.email,
        password: this.password,
      };
      JSON.stringify(this.User);
      // localStorage.setItem("user", JSON.stringify(this.User));
      try {
        await this.LogIn(this.User);
        alert("Successfully Logged In");
        this.$router.push("/application_form");
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}
#login {
  background: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.login-layout-container {
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.login-body-container {
  width: 80%;
  height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-holder img {
  width: 110.1px;
  height: 20.84px;
}
.logo-holder {
  margin: 10px 0;
}
.applicant-login {
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
  height: 30vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-container {
  height: 80px;
  width: 400px;
}
.inputs {
  width: 379px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
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
.login-btn {
  background: #7557d3;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
}
.redirect {
  display: flex;
  width: 379px;
  margin-top: 10px;
}
.redirect p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.signup-redirect {
  color: #4a54e7;
}
.dont-have-account {
  width: 60%;
}
.forgot-password {
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
.dont-have-account a {
  text-decoration: none;
}
</style>
