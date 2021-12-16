import { TRADING_CARDS, TABLE_DATA, TABLE_FILTER } from "../actions";



const initialState = {
    tradingCards: [],
    table: []
}



export const quotes = (state:any = initialState, action: any) => {
    switch (action.type) {
        case TRADING_CARDS:
            return {
                ...state,
                tradingCards: action.payload
            }
        case TABLE_DATA:
            return {
                ...state,
                table: action.payload
            }
        case TABLE_FILTER:
          return {
              ...state,
              table: state.table.filter((row: any) => {
                return row.name.toLowerCase().includes(action.payload.toLowerCase());
              })
          }
        default:
            return state
    }
}


