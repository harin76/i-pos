<template>
  <div class="column side-menu is-2 is-fullheight hero is-dark is-hidden-mobile">
    <div v-for = "menu in menus" class="main">
      <div class="title">{{menu.title}}</div>
      <router-link v-for="item in menu.items" class="item " v-bind:to="item.to">{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'side-menu',
  props: {
    menus: Array
  }
}
</script>
