<template>
  <div class='meeseeks-list'>
    <input class='new-todo'
    autofocus
    autocomplete='off'
    placeholder='Who would you like help with?'
    @keyup.enter='addMeeseeks'>
    <section>
      <mr-meeseeks
        v-for='(meeseek, index) in meeseeks'
        v-bind:key='meeseek.id'
        v-bind:purpose='meeseek.purpose'
        v-bind:id='meeseek.id'></mr-meeseeks>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MrMeeseeks from './MrMeeseeks.vue';

export default {
  components: {
    'mr-meeseeks': MrMeeseeks
  },
  computed: {
    ...mapGetters([
      'meeseeks'
    ])
  },
  methods: {
    addMeeseeks(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.$store.dispatch('addMeeseeksAsync', text);
      }
      e.target.value = '';
    },
    ...mapActions([
      'removeMeeseeksAsync'
    ])
  }
}
</script>

<style scoped>
.meeseeks-list {}
</style>
