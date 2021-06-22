<template>
  <div class="app-form">
    <div class="logo-title">
      <div class="form-logo">
        <img src="../../assets/app-form-logo.svg" alt="form-logo" />
      </div>
      <div>
        <!-- <router-link
          :to="{
            name: 'dashboard-single-user',
            params: { id: 'dashboard-single-user' },
          }"
          >salma</router-link
        > -->
        <!-- <div v-if="User">
          <p>{{ User }}</p>
        </div> -->
        <h1 class="app-title">Application Form</h1>
      </div>
    </div>
    <div class="enclosure">
      <form method="post" @submit.prevent="applicationForm">
        <div class="upload-box">
          <div class="dots">
            <div>
              <img src="../../assets/plus.svg" alt="plus-symbol" />
            </div>
            <div>
              <h1>Upload image</h1>
              <!-- <input
                @change="processFile($event)"
                type="file"
                name="image"
                id="upload-image"
                value="Upload CV"
                enctype="multipart/form-data"
              /> -->
            </div>
          </div>
          <div class="dots">
            <div>
              <img src="../../assets/plus.svg" alt="plus-symbol" />
            </div>
            <div>
              <h1>Upload Photo</h1>
            </div>
          </div>
        </div>
        <div class="input-box">
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">First Name</label>
            <input
              v-model="firstname"
              class="input-style"
              type="text"
              name="firstname"
            />
          </div>
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">Last Name</label>
            <input
              v-model="lastname"
              class="input-style"
              type="text"
              name="lastname"
            />
          </div>
        </div>
        <div class="input-box">
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">Email</label>
            <input
              v-model="email"
              class="input-style"
              type="text"
              name="email"
            />
          </div>
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">Date of Birth</label>
            <input
              v-model="DOB"
              name="DOB"
              class="input-style"
              type="text"
              placeholder="dd/mm/yyyy"
              style="font-family: Lato;
font-style: italic;
font-weight: normal;
font-size: 10px;
line-height: 12px;
color: #CECECE;
padding-left:13px "
            />
          </div>
        </div>
        <div class="input-box">
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">Address</label>
            <input
              v-model="address"
              class="input-style"
              type="text"
              name="address"
            />
          </div>
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">University</label>
            <input
              v-model="university"
              class="input-style"
              type="text"
              name="university"
            />
          </div>
        </div>
        <div class="input-box">
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">Course of Study</label>
            <input
              v-model="program"
              class="input-style"
              type="text"
              name="program"
            />
          </div>
          <div
            class="input-layer-one"
            style="display:flex; flex-direction:column"
          >
            <label for="">CGPA</label>
            <input
              v-model.number="CGPA"
              step="any"
              class="input-style"
              type="number"
              name="CGPA"
            />
          </div>
        </div>
        <div>
          <input class="sub-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "app-form",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      DOB: "",
      address: "",
      university: "",
      program: "",
      CGPA: "",
    };
  },

  computed: {
    ...mapGetters({ forms: "StateForms", User: "StateUser" }),
  },

  methods: {
    ...mapActions(["CreateForm"]),
    async applicationForm() {
      this.forms = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        DOB: this.DOB,
        address: this.address,
        university: this.university,
        program: this.program,
        CGPA: this.CGPA,
      };
      try {
        await this.CreateForm(this.forms);
        this.$router.push("singledashboard");
      } catch (error) {
        throw "Sorry you can't fill a form now";
      }
    },
  },

  // data() {
  //   return {
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     DOB: "",
  //     address: "",
  //     university: "",
  //     program: "",
  //     CGPA: "",
  //   };
  // },

  // methods: {
  //   async createForm() {
  //     const newForm = {
  //       firstname: this.firstname,
  //       lastname: this.lastname,
  //       email: this.email,
  //       DOB: this.DOB,
  //       address: this.address,
  //       university: this.university,
  //       program: this.program,
  //       CGPA: this.CGPA,
  //     };
  //     this.firstname = "";
  //     this.lastname = "";
  //     this.email = "";
  //     this.DOB = "";
  //     this.address = "";
  //     this.university = "";
  //     this.program = "";
  //     this.CGPA = "";

  //     const data = JSON.stringify(newForm);

  //     const response = await fetch("/api/v1/forms", {
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
  //       alert("Application submitted successfully");
  //       window.location.href = "/";
  //     } else {
  //       alert("error occured while submitting application");
  //     }
  //     return response.json();
  //   },
  // },
};
</script>

<style scoped>
.app-form {
  background: #fdfdff;
}
.logo-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 40px;
}
.app-title {
  padding-top: 24px;
  font-family: Lato;
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #2b3c4e;
}
.enclosure {
  width: 963px;
  height: 650px;
  background: #ffffff;
  border-radius: 8px;
  margin: auto;
  margin-bottom: 145px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
}
.upload-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.dots {
  width: 211px;
  height: 49.97px;
  border: 1.5px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 2.87205px;
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px 0;
}
.dots h1 {
  font-family: Avenir;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: #2b3c4e;
  padding: 0 13.97px 0;
}

.input-style {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  /*  */
  width: 379px;
  height: 48px;
}
.input-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
input:focus {
  background: white;
  color: black;
}

label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #2b3c4e;
  padding-bottom: 5px;
}
.input-layer-one {
  height: 100px;
  width: 400px;
}
.sub-btn {
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 43px auto 39px;
}
@media screen and (max-width: 600px) {
  .upload-box {
    flex-direction: column;
  }
  .dots {
    margin: 20px 0;
  }
  .input-box {
    flex-direction: column;
  }
  .logo-title {
    padding: 120px 0 50px 470px;
  }
  .app-title {
    width: 190px;
    text-align: center;
  }
}
</style>
