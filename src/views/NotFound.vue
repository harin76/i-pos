<template>
  <div class="notification is-danger">
    <button class="delete" v-on:click="handleClose"></button>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      msg: 'ROUTE NOT FOUND'
    }
  },
  methods: {
    handleClose () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
