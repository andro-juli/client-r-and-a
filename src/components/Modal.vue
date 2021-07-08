<template>
  <div class="mymodal">
    <div>
      <div class="image">
        <img :src="entry.files.filename" alt="" />
      </div>
      <div class="para">
        <p>Personal Details</p>
      </div>
      <div class="line"></div>
      <div class="input-cont">
        <div>
          <label for="">Name</label> <br />
          <input
            type="text"
            name="name"
            id="userInput"
            :value="entry.firstname + ' ' + `${entry.lastname}`"
          />
        </div>
        <div>
          <label for="">Email</label> <br />
          <input type="text" name="email" id="userInput" :value="entry.email" />
        </div>
        <div>
          <label for="">Address</label> <br />
          <input
            type="text"
            name="address"
            id="userInput"
            :value="entry.address"
          />
        </div>
        <div>
          <label for="">University</label> <br />
          <input
            type="text"
            name="uni"
            id="userInput"
            :value="entry.university"
          />
        </div>
        <div>
          <label for="">Course of study</label> <br />
          <input type="text" name="cos" id="userInput" :value="entry.program" />
        </div>
        <div>
          <label for="">Date of birth</label> <br />
          <input type="text" name="dob" id="userInput" :value="entry.dob" />
        </div>
        <div>
          <label for="">CGPA</label> <br />
          <input type="text" name="cgpa" id="userInput" :value="entry.cgpa" />
        </div>
      </div>
      <div class="btns-cont">
        <button class="approve-btn" @click="toggleM">Approve</button>
        <button class="decline-btn">Decline</button>
      </div>
    </div>

    <div
      class="submodal-overlay"
      v-if="showSubModal"
      @click="showSubModal = true"
    >
      <transition name="slide" appear>
        <div class="submodal-cont">
          <div class="yes_no-cont ">
            <p>
              Are you sure you want to approve <br />
              this application?
            </p>
            <div class="submodal-btns-cont">
              <button class="approve-btn">Yes</button>
              <button class="decline-btn">No</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
  data() {
    return {
      items: [this.forms],
      showSubModal: false,
      showModal: true,
    };
  },
  props: ["entry"],

  computed: {
    forms() {
      return this.$store.state.auth.allForms.data;
    },
  },

  methods: {
    toggleM() {
      this.showSubModal = true;
      this.showModal = false;
    },
  },
};
</script>

<style>
.mymodal {
  padding: 25px;
  display: grid;
}
.image {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 179px;
  height: 179px;
  border: 1px solid green;
}
.line {
  width: 480px;
  height: 1px;
  background: #f2f2f2;
}
#userInput {
  width: 231px;
  height: 48px;
  border: 1px solid #cdcfd6;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px;
}
.input-cont {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
.approve-btn {
  width: 125px;
  height: 48px;
  background: #7557d3;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-right: 10px;
}
.decline-btn {
  width: 125px;
  height: 48px;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
}
.btns-cont {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.submodal-btns-cont {
  width: 100%;
  display: flex;
  justify-content: center;
}

.submodal-overlay {
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
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.submodal-cont {
  width: 458px;
  height: 300px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid red;
  z-index: 99;
  display: flex;
  justify-content: center;
}
.yes_no-cont {
  width: 70%;
  height: 150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}
.yes_no-cont p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  text-align: center;
  color: #4f4f4f;
}
</style>
