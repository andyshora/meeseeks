import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    meeseeks: []
  },
  getters: {
    meeseeks: state => state.meeseeks
  },
  mutations: {
    addMeeseeks: (state, payload) => {
      state.meeseeks.push({ id: Math.random() * 9999, purpose: payload });
    },
    removeMeeseeks: (state, payload) => {
      state.meeseeks = _.reject(state.meeseeks, m => m.id === payload);
    }
  },
  actions: {
    addMeeseeks: ({ commit }, payload) => {
      commit('addMeeseeks', payload)
    },
    addMeeseeksAsync: ({ commit }, payload) => {
      // simulate an async action
      setTimeout(() => {
        commit('addMeeseeks', payload);
      }, 100);
    },
    removeMeeseeks: ({ commit }, payload) => {
      commit('removeMeeseeks', payload);
    },
    removeMeeseeksAsync: ({ commit }, payload) => {
      // simulate an async action
      setTimeout(() => {
        commit('removeMeeseeks', payload);
      }, 100);
    }
  }
});
