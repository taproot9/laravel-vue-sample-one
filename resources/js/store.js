import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //http://49.147.124.131/laravel-vue-sample-one/public
    state: {
        apiUrl: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000'
        // apiUrl  :  'http://49.147.124.131/laravel-vue-sample-one/public/api',
        // serverPath : 'http://49.147.124.131/laravel-vue-sample-one/public'
    },
    mutations: {},
    actions: {},

});
