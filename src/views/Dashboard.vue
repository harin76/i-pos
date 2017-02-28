<template>
  <section class="section">
  <div class="columns">
    <div class="column is-10">
      <h1 class="title">{{title}}</h1>
    </div>
  </div>
  <!-- TABLE HERE !-->
  <section>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      title: 'Dashboard'
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
