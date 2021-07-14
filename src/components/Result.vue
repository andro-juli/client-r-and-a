<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Address</th>
          <th>University</th>
          <th>CGPA</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {};
  },

  computed: {
    mytabledata() {
      return this.$store.state.auth.mytable;
    },
  },
};
</script>

<style scoped>
table {
  width: 90%;
  margin: auto;
}
td,
th {
  padding: 5px;
}
tbody > tr {
  width: 100%;
  height: 46px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
}
thead > tr {
  width: 100%;
  height: 46px;
  background: #2b3c4e;
  color: #ffffff;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
}
tbody > tr:hover {
  width: 100%;
  height: 66px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  cursor: pointer;
  border-left: 6px solid blue;
  border-radius: 2px;
}
</style>
