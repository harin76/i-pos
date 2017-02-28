<template>
  <div class="ac-input">
    <p class="control has-icon has-icon-right">
      <input class="input"
        v-model="selected"
        @input="onInput($event.target.value)"
        @keyup.esc="isOpen = false"
        @blur="isOpen = false"
        @keydown.down="moveDown"
        @keydown.up="moveUp"
        @keydown.enter="select"
        placeholder="search"
      >
    </p>
    <ul class="options-list" v-show="isOpen">
      <li v-for="(option, index) in options"
      :class = "{'highlighted': index === highlightedPosition}"
      @mouseenter="highlightedPosition = index"
      @mousedown="select"
      > {{option}} </li>
    </ul>
  </div>
</template>
<script>
import 'vue-awesome/icons/angle-down'
import Icon from 'vue-awesome/components/Icon.vue'
export default {
  name: 'auto-complete',
  components: {
    Icon
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: null,
      isOpen: false,
      highlightedPosition: 0
    }
  },
  methods: {
    onInput (value) {
      this.isOpen = this.options.length > 0
    },
    moveDown () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.options.length
    },
    moveUp () {
      if (!this.isOpen) {
        return
      }

      this.highlightedPosition = this.highlightedPosition - 1 < 0
      ? this.options.length - 1
      : this.highlightedPosition - 1
    },
    select () {
      const selectedOption = this.options[this.highlightedPosition]
      this.selected = selectedOption
      this.isOpen = false
      this.$emit('select', selectedOption)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ac-input {
  position: relative;
}

ul.options-list {
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-top: -12px;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

ul.options-list li {
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #363636;
  padding: 7px;
  cursor: pointer;
}

ul.options-list li.highlighted {
  background: #f8f8f8
}
</style>
