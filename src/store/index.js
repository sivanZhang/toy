import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//数据
const state = {
    'product': null,
};
//改变数据的方法
const mutations = {
    setProduct(state, val) {
        state.product = val;
    }
};
//实例化vuex,暴露方法
export default new Vuex.Store({
    state,
    mutations
});