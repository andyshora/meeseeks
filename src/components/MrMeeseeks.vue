<template>
  <transition name='bounce'>
    <div class='mr-meeseeks'>
      <img src='../assets/mr-meeseeks.jpeg'>
      <p>{{purpose}} - {{id}}</p>
      <button v-on:click='removeMeeseeksAsync(id)'>Purpose Served</button>
      <button v-on:click='getHelp(purpose)'>Get Help</button>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    getHelp(purpose) {
      if (purpose) {
        this.$store.dispatch('addMeeseeksAsync', purpose);
      }
    },
    ...mapActions([
      'removeMeeseeksAsync'
    ])
  },
  props: ['purpose', 'id']
}
</script>

<style scoped>
.mr-meeseeks {
  padding: 10px;
}
.mr-meeseeks > img {
  height: 100px;
}
.bounce-enter-active {
  animation: bounce 1s;
}
.bounce-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    background: red;
  }
  100% {
    background: white;
  }
}
</style>
