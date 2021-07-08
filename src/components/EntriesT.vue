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
        </tr>
      </thead>
      <tbody>
        <tr
          @click="openModal(form.id)"
          v-for="(form, index) in forms"
          :key="index"
        >
          <td>{{ form.firstname + " " + form.lastname }}</td>
          <td>{{ form.email }}</td>
          <td>{{ form.dob }}</td>
          <td>{{ form.address }}</td>
          <td>{{ form.university }}</td>
          <td>{{ form.cgpa }}</td>
        </tr>
      </tbody>
    </table>

    <div class="modal-overlay" v-if="showModal" @click="showModal = true">
      <transition name="fade" appear>
        <div class="modal-cont">
          <Modal :entry="singleEntry" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "mytable",
  components: {
    Modal,
  },
  data() {
    return {
      items: [this.forms],
      showModal: false,
      singleEntry: {},
    };
  },

  methods: {
    openModal(id) {
      this.showModal = true;
      const singleForm = this.forms.find((item) => item.id === id);
      this.singleEntry = singleForm;
    },
  },

  computed: {
    forms() {
      return this.$store.state.auth.allForms.data;
    },
  },
};
</script>

<style>
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
/* modal style */
.modal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  width: 100%;
  height: 120vh;
  border: 1px solid magenta;
  /* background-color: #ffffff; */
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-cont {
  background-color: #ffffff;
  height: 120vh;
  width: 40%;
  border: 1px solid red;
  z-index: 99;
}
.fade-enter-active .fade-leave-active {
  transition: opacity 0.5s;
}
</style>
