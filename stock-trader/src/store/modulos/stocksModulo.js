import dataStocks from '../../data/stocksData'

export default{
    state:{
        stocks: []
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions:{
        // buyStock({commit}, order){
        //     commit()
        // },
        initStocks({commit}){
            commit('setStocks', dataStocks)
        }
    },
    getters:{
        getStocks(state){
            return state.stocks
        }
    }
}