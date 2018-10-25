import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//数据
const state = {
    'product': {},
};
//改变数据的方法
const mutations = {
    setProduct(state, val) {
        state.product = Object.assign(val);
    }
};
//实例化vuex,暴露方法
export default new Vuex.Store({
    state,
    mutations
});