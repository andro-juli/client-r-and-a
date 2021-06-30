//store/modules/auth.js

import axios from "axios";
const state = {
  token: "",
  user: null,
  allusers: [],
  allForms: [],
  questions: [],
  profile: "",
  oneApp: "",
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateForms: (state) => state.allForms,
  StateUser: (state) => state.user,
  // StateAllUsers: (state) => state.allusers,
  getProfile: (state) => state.profile,
  getOneApp: (state) => state.oneApp,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setProfile(state, user) {
    state.profile = user;
  },

  setForms(state, allForms) {
    state.allForms = allForms;
  },
  setQuestions(state, questions) {
    state.questions = questions;
  },
  setSignedupUser(state, details) {
    state.details = details;
  },
  setAllUsers(state, allusers) {
    state.allusers = allusers;
  },

  retrieveToken(state, token) {
    state.token = token;
  },

  setOneApp(state, user) {
    state.oneApp = user;
  },

  destroyUser(state) {
    state.user = null;
  },

  destroyToken(state) {
    state.token = null;
  },
};

const actions = {
  async Signup({ commit }, details) {
    await axios.post("users/signup", details);
    JSON.stringify(details);
    console.log(details);
    commit("setSignedupUser", details);
  },

  async LogIn({ commit }, UserInfo) {
    const response = await axios.post("users/login", UserInfo);
    // JSON.stringify(UserInfo);
    const token = await response.data.data.token;
    localStorage.setItem("access_token", JSON.stringify(token));
    console.log(token);
    commit("retrieveToken", token);

    const user = await response.data.data.user.id;
    localStorage.setItem("userP", JSON.stringify(user));
    commit("setUser", user);

    // const user = response.data.data;
    // localStorage.setItem("user", JSON.stringify(user));
    // commit("setUser", user);
  },

  async GetAllUsers({ commit }, users) {
    let response = await axios.get("users", users);
    commit("setAllUsers", response.data);
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

  async fetchProfile({ commit }) {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Bearer" + this.state.token;

      var id = localStorage.getItem("userP");
      const response = await axios.get(`users/${id}`);
      console.log(id);
      console.log(response);
      commit("setProfile", response.data.data);
    } catch (error) {
      commit("setProfile", error.response);
    }
  },

  async fetchOneApp({ commit }) {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Bearer" + this.state.token;
      var id = localStorage.getItem("userP");
      console.log(id);
      const response = await axios.get(`forms/${id}`);
      commit("setOneApp", response.data.data);
    } catch (error) {
      commit("setOneApp", error.response);
    }
  },

  LogOut({ commit }) {
    axios.defaults.headers.common["Authorization"] = {};
    localStorage.removeItem("access_token");
    localStorage.removeItem("userP");
    commit("destroyToken");
    commit("destroyUser");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
