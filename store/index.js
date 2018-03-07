import axios from '~/plugins/axios'

export const state = () => ({
  users: [
    {id: 0, login: "John"}
  ],
  items: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },

  setItems(state, items) {
    state.items = items
  }
}
export const actions = {
  async nuxtServerInit({commit}) {
    const gitResponse = await axios.get('users') //https://api.github.com mock데이터 연습용
    commit('setUsers', gitResponse.data)
    
    //hackernews에서 사용하는 부분
    // const response = await axios.get('topstories.json')
    // const users = response.data
    // const tenIds = users.slice(0, 10)
    // const itemsPromises = tenIds.map( id => axios.get(`item/${id}.json`))
    // const itemsResponses = await Promise.all(itemsPromises)

    // commit('setItems', itemsResponses)
  }
}

