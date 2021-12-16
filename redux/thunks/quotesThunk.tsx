import axios from "axios";
import { TABLE_DATA, TABLE_FILTER, TRADING_CARDS } from "../actions";

import { public_url } from "../../variables";

import styles from '../../styles/MaterialTable/MaterialTable.module.scss'

// table data function
function createData(
  name: string,
  sell: JSX.Element,
  buy: JSX.Element,
  spread: string,
  change: JSX.Element
) {
  return { name, sell, buy, spread, change };
}

export const loadTradingCards = () => {
  return async (dispatch: any) => {
    // get trade quotes
    const {
      data: { data },
    }: any = await axios
      .get(`${public_url}/api/trade-cards`)
      .catch((err) => console.log(err));

    dispatch({
      type: TRADING_CARDS,
      payload: data,
    });
  };
};

export const loadTableQuotes = (category: string) => {
  return async (dispatch: any) => {
    const {
      data: { data },
    }: any = await axios
      .get(`${public_url}/api/${category === "Forex" ? "forexes" : category}/`)
      .catch((err) => console.log(err));
    
      let temp: any = []
      await data.map((item: any) => {
        const info: any = item.attributes;
        const bid: number = info.bid;
        const ask: number = info.ask;
        const old: number = info.oldbid;
        const pips: string = info.pips.toFixed(2) + " pips";
        const old_ask: number = info.oldask;
        const percentage: number = parseFloat(
          (((bid - old) / old) * 100).toFixed(2)
        );
        const ask_percentage: number = parseInt(
          (((ask - old_ask) / old_ask) * 100).toFixed(2)
        );
        temp.push(
          createData(
            info.title,
            <span
              className={
                percentage > 0 ? styles.number_green : styles.number_red
              }
            >
              {parseFloat(info.bid.toFixed(5))}
            </span>,
            <span
              className={
                ask_percentage > 0 ? styles.number_green : styles.number_red
              }
            >
              {parseFloat(info.ask.toFixed(5))}
            </span>,
            pips,
            <div className="ms-auto d-flex">
              <div
                className={
                  percentage > 0 ? styles.arrow_up : styles.arrow_down
                }
              ></div>
              <div style={{ color: percentage > 0 ? "#60BB7D" : "#f00" }}>
                % {percentage > 0 ? "+" + percentage : percentage}
              </div>
            </div>
          )
        )
      })
    

    await dispatch({
      type: TABLE_DATA,
      payload: temp
    })
  };
};

export const filterTable = (searched: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: TABLE_FILTER,
      payload: searched
    })
  }
}
