<template>
  <h1 class="f1 code">Hello world
    <ul>
    <li v-for='user in users'>{{ user.login }}</li>
  </ul>
  </h1>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    asyncData() {
      return axios.get('users')
        .then(res => ({
          users: res.data
        }))
    }
  }
</script>