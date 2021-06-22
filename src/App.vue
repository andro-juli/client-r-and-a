<template>
  <div id="app">
    <div id="nav">
      <div class="auth-wrapper">
        <!-- <router-view :user="user" /> -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "app",

  // data() {
  //   return {
  //     user: null,
  //   };
  // },

  // async created() {
  //   const response = await fetch("user", {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   });
  //   console.log(response);

  //   this.$store.dispatch("user", response.data);
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
