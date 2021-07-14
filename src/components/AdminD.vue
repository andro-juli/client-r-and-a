<template>
  <div class="adminD">
    <div class="dashboard-menu">
      <li class="dash">
        <img src="../assets/dashboard.svg" alt="" />
        <router-link :to="{ name: 'SingleDashboard' }">Dashboard</router-link>
      </li>
      <li class="ass">
        <img src="../assets/create-app.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Create Application</router-link
        >
      </li>
      <li class="ass">
        <img src="../assets/entries.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Application Entries</router-link
        >
      </li>
      <li class="ass">
        <img src="../assets/compose.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Compose Assessment</router-link
        >
      </li>
      <li class="ass">
        <img src="../assets/history.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Assessment History</router-link
        >
      </li>
      <li class="ass">
        <img src="../assets/result.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Results</router-link
        >
      </li>
      <li class="ass">
        <img src="../assets/Setting.svg" alt="" /><router-link
          :to="{ name: 'Assessment' }"
          >Settings</router-link
        >
      </li>
    </div>
    <Logout />
  </div>
</template>

<script>
import Logout from "@/components/Logout.vue";
export default {
  name: "admin-dash",
  components: {
    Logout,
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  margin-bottom: 10px;
}
.adminD {
  width: 100%;
  height: 83vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border: 1px solid magenta;
  padding-left: 30px;
}

.dashboard-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
}
.dashboard-menu img {
  padding-right: 10px;
}
.ass {
  list-style-type: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 10px;
  text-decoration: none;
}
.ass:active {
  text-decoration-color: #2b3c4e;
}
.dash {
  list-style-type: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 10px;
  text-decoration: none;
}
</style>
