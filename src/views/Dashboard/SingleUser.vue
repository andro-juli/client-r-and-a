<template>
  <div class="user-dash">
    <h1>This is a single user {{ $route.params.id }}</h1>
    <div class="dashboard-menu"><h1>can you see me</h1></div>
    <div class="dashboard-body"></div>
  </div>
</template>

<script>
export default {
  name: "user-dash",
};
</script>

<style scoped>
.user-dash {
  width: 100%;
  height: 100vh;
  display: flex;
}
.dashboard-menu {
  width: 20%;
  height: 100vh;
  border: 1px solid red;
}
.dashboard-body {
  width: 80%;
  height: 100vh;
  border: 1px solid green;
}
</style>
