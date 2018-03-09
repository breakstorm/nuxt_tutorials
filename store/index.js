import axios from "~/plugins/axios";

export const state = () => ({
  // users: [{ id: 0, login: "John" }]
  ids: [{ id: 0, login: "John" }]
});

export const mutations = {
  // setUsers(state, users) {
  //   state.users = users;
  // }
  setIds(state, ids) {
    state.ids = ids;
  }
};
export const actions = {
  async nuxtServerInit({ commit }) {
    // const response = await axios.get('users')
    // const users = response.data
    // commit('setUsers', users)
    const response = await axios.get("topstories.json");
    const ids = response.data;
    commit("setIds", ids);
  }
};
