/* import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
 */

import { reactive } from 'vue'
export default reactive({ flashMessage: '', event: null, organizers: null, currentUser: JSON.parse(localStorage.getItem('user')) })