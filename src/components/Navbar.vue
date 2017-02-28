<template>
  <nav class="nav has-shadow is-dark" id="top">
    <div class="container is-fluid">
      <div class="nav-left">
        <a class="nav-item" href="#">
          <h1>iPoS</h1>
        </a>
      </div>
       <div class="nav-right nav-menu">
         <router-link class="nav-item is-tab" to="logout">Logout</router-link>
       </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      title: 'Main'
    }
  }
}
</script>
