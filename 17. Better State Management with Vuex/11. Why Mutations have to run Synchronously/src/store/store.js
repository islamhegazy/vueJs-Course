// npm i --save vuex

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,

    },
    getters:{
        doubleCounter: state =>{
            return state.counter * 2 ;
        },
        stringCounter: state =>{
            return state.counter + ' CLicks' ;
        }
    },
    //we're basically accessing our state and we manipulate it
    //there well that can get a problem if you've got multiple
    //components manipulating our state the again it gets hard to 
    //track which component edited the state at which point of time
    /*
    so the better way is to use similar concept as with getters 
    but now for setting the store, now you cloud think it's called
    setters but it's actually called mutations because it mutates
    the store or the state i should say, it changes the state 
    the mutations are commited so we basically commit such a mutation
    from one point in our app or from one component maybe and then this
    will update the state and all the components listening through 
    getters wii auto receive the updated state 
     */
    mutations: {
        //these mutations do face one big issue they always have to 
        //be syncgronous so may not run or you must not run any 
        //asynchronous task in such a mutation 
        increment: state =>{ 
          //  setTimeout(() => {}, timeout); not work
            state.counter++;
        },
        decrement: tate =>{
            state.counter--;
        }
    }
});

// import in main.js