import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

const state = {
  username:'',//登录名称
  cartCount:-1//购物车商品数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})