<template>
  <div class="columns">
    <side-menu :menus="menus"></side-menu>
    <div class="column is-10 is-full-height">
      <navbar></navbar>
      <component :is="type"></component>
    </div>
  </div>
</template>

<script>
import SideMenu from 'components/SideMenu'
import Navbar from 'components/Navbar'
import ListItems from 'views/Items/ListItems'
import CreateItem from 'views/Items/CreateItem'
import EditItem from 'views/Items/EditItem'
import Dashboard from 'views/Dashboard'
import NotFound from 'views/NotFound'

export default {
  name: 'workarea',
  components: {
    SideMenu,
    Navbar,
    ListItems,
    CreateItem,
    EditItem,
    Dashboard,
    NotFound
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menus: [
        {
          title: 'Main',
          items: [
            {to: '/', name: 'Dashboard'},
            {to: '/locations', name: 'Locations'},
            {to: '/register', name: 'Register'},
            {to: '/employees', name: 'Employees'},
            {to: '/customers', name: 'Customers'},
            {to: '/reports', name: 'Reports'}
          ]
        }, {
          title: 'Products',
          items: [
            {to: '/listItems', name: 'Items'},
            {to: '/categories', name: 'Categories'},
            {to: '/modifiers', name: 'Modifiers'},
            {to: '/taxes', name: 'Taxes'},
            {to: '/discounts', name: 'Discounts'}
          ]
        }
      ]
    }
  },
  props: {
    type: String
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
