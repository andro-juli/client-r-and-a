<template>
  <div class="adminlogin">
    <div class="desktop-background">
      <img src="../assets/desktop-background.svg" alt="" />
    </div>
    <form @submit.prevent="submit" class="login-box">
      <div class="logo">
        <img src="../assets/enyata-logo.svg" alt="enyata logo" />
      </div>
      <h2 class="login-header">Admin Log In</h2>
      <label for="email">Email Address</label>
      <input
        class="emailfield"
        type="email"
        name="email"
        v-model="form.email"
      />
      <label for="password">Password</label>
      <input
        class="passwordfield"
        type="password"
        name="password"
        v-model="form.password"
      />
      <button class="btn" type="submit">Sign In</button>
    </form>
    <p v-if="showError" id="error">Email or Password is incorrect</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  name: "AdminLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["AdminLogin"]),
    async submit() {
      const Admin = new FormData();
      Admin.append("email", this.form.email);
      Admin.append("password", this.form.password);
      try {
        await this.AdminLogin(Admin);
        this.$router.push("forms");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.adminlogin {
  background-color: #7557d3;
  color: #ffffff;
}
.desktop-bacground img {
  width: 100%;
  height: 100%;
}
.desktop-background {
  height: 50vh;
  width: 40%;
}
/* 
.login-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 40%;
}
.logo {
  width: 110px;
  height: 21px;
  margin: auto;
}
.logo img {
  width: 100%;
  height: 100%;
}
.login-header {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin: 24px 0 58px;
}
label {
  font-family: "Lato";
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
}
input {
  border: 1.5px solid #ffffff;
  border-radius: 4px;
  width: 379px;
  height: 48px;
  background: none;
  margin-bottom: 30px;
}
.btn {
  width: 379px;
  height: 50px;
  background: #ffffff;
  border-radius: 4px;
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #7557d3;
  border: none;
} */
</style>
