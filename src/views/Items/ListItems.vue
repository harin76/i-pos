<template>
  <section class="section">
  <div class="columns">
    <div class="column is-10">
      <h1 class="title">{{title}}</h1>
    </div>
    <div class="column is-2">
      <button
        class="button is-pulled-right is-outlined"
        v-on:click="handleCreateItem">
        {{titleCreate}}
      </button>
    </div>
  </div>
  <!-- DATA TABLE HERE !-->
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td><router-link :to="getEditUrl(item.id)">{{item.name}}</router-link></td>
        <td>{{item.category}}</td>
        <td>
            {{item.variants.length > 0
              ? item.variants.length + ' variants'
              : item.variants[0].price
            }}
        </td>
      </tr>
    </tbody>
  </table>
  <section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'list-items',
  created () {
    this.list({})
  },
  data () {
    return {
      title: 'Items',
      titleCreate: 'Create New',
      modalIsActive: false
    }
  },
  computed: {
    ...mapGetters({
      items: 'items/items'
    })
  },
  methods: {
    ...mapActions('items', [
      'list'
    ]),
    handleCreateItem () {
      console.log(this.$router.params)
      this.$router.push('/createItem')
    },
    getEditUrl (id) {
      return '/editItem/' + id
    }
  }
}
</script>
