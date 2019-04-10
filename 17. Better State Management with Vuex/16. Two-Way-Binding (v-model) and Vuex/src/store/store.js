// npm i --save vuex

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value:0

    },
    getters:{
        doubleCounter: state =>{
            return state.counter * 2 ;
        },
        stringCounter: state =>{
            return state.counter + ' CLicks' ;
        },
        stringCounterBy100: state =>{
            return state.counter/100 + ' CLicks' ;
        },
        value: state =>{
            return state.value ;
        }
    },
    mutations: {
        increment: (state , payload) =>{ 
          //  setTimeout(() => {}, timeout); not work so use actions
            state.counter +=payload;
        },
        decrement: (state , payload) =>{ 
            state.counter -=payload;
        },
        asynIncrement: (state , payload) =>{ 
            state.counter +=payload;
        },
        asynDecrement: (state , payload) =>{ 
            state.counter -=payload;
        },
        updateValue: (state , payload) =>{ 
            state.value = payload;
        }
    },
    //13. Using Actions
    actions:{
        /*
        increment: context => {
            context.commit('increment');

        },
        or
        */
        increment: ({ commit }, payload) => { 
            commit('increment',payload);

        },
        decrement: ({ commit }, payload) => { 
            commit('decrement',payload);
        },
        asynIncrement:({ commit }, payload) => { 
            setTimeout( () =>{
                commit('asynIncrement',payload.by);
            },payload.duration);
        },
        asynDecrement:({ commit }, payload) => { 
            setTimeout( () =>{
                commit('asynDecrement',payload.by);
            },payload.duration);
        },
        updateValue:({ commit }, payload) => { 
                commit('updateValue',payload);
        }
 
    }
});

// import in main.js