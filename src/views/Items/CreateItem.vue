<template>
  <section class="section">
    <div v-bind:class="['notification', 'is-danger', {'is-hidden': !hasErrors}]">
      <ul>
        <li v-for="error in errors"> {{error.msg}} </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="title">{{title}}</h1>
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" v-model="item.name" placeholder="Almonds">
        </p>
        <label class="label">Category</label>
        <p class="control">
          <input class="input" type="text" v-model="item.category" placeholder="Grocery">
        </p>
        <label class="label">AUTO</label>
        <auto-complete :options="options" @select="handleOnSelect"></auto-complete>
        <label class="label">Description</label>
        <p class="control">
          <textarea class="textarea" v-model="item.description" placeholder="Sun dried almonds from..."></textarea>
        </p>
        <hr class="is-info">
        <h4 class="title is-4">Variants</h4>
        <div class="columns">
          <div class="column is-12">
            <table class="table">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input class="input" type="text" v-model="sku" placeholder="SKU"></td>
                  <td><input class="input" type="text" v-model="name" placeholder="Name"></td>
                  <td><input class="input" type="text" v-model="price" placeholder="Price"></td>
                  <td><button class="button is-info is-pulled-right" v-on:click="handleAddVariant()">Add</button></td>
                </tr>
                <tr v-for="variant in item.variants">
                  <td>{{variant.sku}}</td>
                  <td>{{variant.name}}</td>
                  <td>{{variant.price}}</td>
                  <td><a class="is-danger delete is-pulled-right"></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="control is-grouped is-pulled-right">
          <p class="control">
            <button class="button is-primary" v-on:click="handleCreate">Create</button>
          </p>
          <p class="control">
            <button class="button is-link" v-on:click="handleCancel">Cancel</button>
          </p>
        </div>
      </div>
    </div>
  <section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AutoComplete from 'components/AutoComplete'

import _ from 'lodash'
export default {
  name: 'create-item',
  components: {
    AutoComplete
  },
  data () {
    return {
      title: 'Create Item',
      sku: null,
      name: null,
      price: null
    }
  },
  computed: {
    ...mapGetters({
      errors: 'items/errors',
      newItem: 'items/newItem'
    }),
    item () {
      return _.cloneDeep(this.newItem)
    },
    hasErrors () {
      return this.errors && this.errors.length > 0
    },
    options () {
      return ['First', 'Second', 'Third']
    }
  },
  methods: {
    ...mapActions('items', [
      'create'
    ]),
    isValidVariant (variant) {
      return (variant.name !== null) && (variant.price !== null)
    },
    resetVariant () {
      this.sku = null
      this.name = null
      this.price = null
    },
    handleAddVariant () {
      const variant = {
        sku: this.sku,
        name: this.name,
        price: this.price
      }

      if (this.isValidVariant(variant)) {
        this.item.variants.push(variant)
        this.resetVariant()
      }
    },
    handleCreate () {
      this.create(this.item)
    },
    handleCancel () {
      this.$router.push('/listItems')
    },
    handleOnSelect (value) {
      console.log(value)
    }
  }
}
</script>
