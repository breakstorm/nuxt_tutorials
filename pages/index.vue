<template>
  <h1 class="f1 code">Hello world
    {{ items }}
    <ul>
    <li v-for='user in this.$store.state.users' :key="user.id">{{ user.login }}</li>
  </ul>
  </h1>
</template>

<script>
  // import axios from '~/plugins/axios'
  import {mapState} from 'vuex'

  export default {
    // asyncData() {
    //   return axios.get('users')
    //     .then(res => ({
    //       users: res.data
    //     }))
    // }
    computed: mapState([
      // 'users',
      'items'
    ])
  }
</script>