<template>
  <section class="section">
    <div class="columns">
      <div class="column is-12">
        <h1 class="title">{{title}} - {{id}}</h1>
      </div>
    </div>
  <section>
</template>

<script>

export default {
  name: 'edit-item',
  data () {
    return {
      title: 'Edit Item'
    }
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  }
}
</script>
