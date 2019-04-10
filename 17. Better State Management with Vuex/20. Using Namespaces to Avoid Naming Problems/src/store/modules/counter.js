import * as types from '../types';

const state ={
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state =>{
        return state.counter * 2 ;
    },
    [types.CLICK_COUNTER]: state =>{
        return state.counter + ' CLicks' ;
    },
    stringCounterBy100: state =>{
        return state.counter/100 + ' CLicks' ;
    }
};
const mutations = {
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
      }
};

const actions = {
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
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}