<template>
<div>
  <h1 class="f1 code">Hello world
  </h1>
  <ul v-for="item in items" :key="item.id">
    <li>{{ item.title }}</li>
  </ul>
</div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState([
      'ids',
      'items'
    ])
  }
</script>