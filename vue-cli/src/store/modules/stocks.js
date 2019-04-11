 import stocks from '../../data/stocks';
const state = {
    stocks:[]
};

const mutations = {
    'SET_STOCKS'(state, payloadStocks){
        state.stocks = payloadStocks;
    },
    'RANDOM_STOCKS'(state){
       
    }

};

const actions = {
    buyStock: ({commit} , order) =>{
        commit();
    },
    initStocks:({commit}) =>{
        commit('SET_STOCKS',stocks);
    }
};