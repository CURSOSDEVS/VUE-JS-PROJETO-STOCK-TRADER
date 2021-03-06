export default{
    state: {
        funds: 10000,
        stocks: []
    },
    mutations:{
        buyStock(state,{ stockId,quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
           // console.log('Record: '+record)
            if(record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            
            state.funds -= stockPrice * quantity
        },
        sellStock(state,{ stockId, quantity, stockPrice}){
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity
            }   else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, stockPortfolio){
            state.funds = stockPortfolio.funds
            state.stocks = stockPortfolio.stockPortfolio ? stockPortfolio.stockPortfolio:[]
        }
    },
    actions:{
        sellStock({ commit }, order){
            commit('sellStock', order)
        }
    },
    getters:{
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                    const record = getters.getStocks.find(element => element.id == stock.id)
                    return{
                        id: stock.id,
                        quantity: stock.quantity,
                        name: record.name,
                        price: record.price
                    }
            })
        },
        funds(state){
            return state.funds
        }
    }
}