<template>
  <transition name='fade'>
    <div class='mr-meeseeks'>
      <mr-meeseeks-svg v-bind:height='50' v-bind:width='50'></mr-meeseeks-svg>
      <p>Purpose: {{purpose}}</p>
      <button v-on:click='removeMeeseeksAsync(id)'>Purpose Served</button>
      <button v-on:click='getHelp(purpose)'>Get Help</button>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';
import MrMeeseeksSVG from './MrMeeseeksSVG.vue';

export default {
  components: {
    'mr-meeseeks-svg': MrMeeseeksSVG
  },
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
  display: inline-block;
}
.mr-meeseeks > img {
  height: 100px;
}
.fade-enter-active {
  animation: fade .6s;
}
.fade-leave-active {
  animation: fade .6s reverse;
}
@keyframes fade {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
