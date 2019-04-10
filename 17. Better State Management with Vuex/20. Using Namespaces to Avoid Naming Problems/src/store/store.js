// npm i --save vuex

import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

// let js create object with name getters
import * as getters from './getters';

// let js create object with name mutations
import * as mutations from './mutations';

// let js create object with name actions
import * as actions from './actions';



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules:{
        counter:counter
    }
});

// import in main.js