//store/modules/auth.js

import axios from "axios";
const state = {
  user: [],
  formsUser: [],
  questions: [],
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateForms: (state) => state.formsUser,
  StateUser: (state) => state.user,
};

const actions = {
  async Signup({ dispatch }, details) {
    await axios.post("users/signup", details);
    JSON.stringify(details);
    console.log(details);
    let UserDetails = new FormData();
    UserDetails.append("email", details.email);
    UserDetails.append("password", details.password);
    await dispatch("Login", UserDetails);
  },

  async LogIn({ commit }, User) {
    await axios.post("users/login", User);
    await commit("setUser", User.get("email", "firstname", "lastname"));
  },

  async CreateForm({ dispatch }, forms) {
    await axios.post("forms", forms);
    await dispatch("GetForms");
  },

  async GetForms({ commit }, formdata) {
    let response = await axios.get("forms", formdata);
    commit("setForms", response.data);
  },
  async GetQuestions({ commit }, questiondata) {
    let response = await axios.get("admin/questions", questiondata);
    commit("setQuestions", response.data);
  },

  // async getsingleForm({ commit }, formsId) {
  //   axios.get(`forms/${formsId}`).then((response) => {
  //     commit("setForms", response.data);
  //   });
  // },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, [email, firstname, lastname, created_at]) {
    state.user = [email, firstname, lastname, created_at];
    // state.user = firstname;
    // state.user = lastname;
    // state.user = created_at;
  },
  setForms(state, formsUser) {
    state.formsUser = formsUser;
  },
  setQuestions(state, questions) {
    state.questions = questions;
  },

  LogOut(state) {
    state.user = null;
    state.formsUser = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
