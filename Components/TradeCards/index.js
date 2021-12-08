import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import styles from '../../styles/HomeSlider/HomeSlider.module.scss'

function TradeCards(props) {

    const { title, percentage, bid, ask } = props

    let bid_first,
        bid_second,
        bid_third,
        ask_first,
        ask_second,
        ask_third,
        pips = (ask - bid) * 1000

    if(bid) {
        
        bid_first = Math.floor(bid * 100) / 100
        bid_second = bid.toString()
        bid_third = bid.toString()

        ask_first = Math.floor(ask * 100) / 100
        ask_second = ask.toString()
        ask_third = ask.toString()

        // if quote is eurusd or gbpusd
        if(title === 'EURUSD' || title === 'GBPUSD') {
            bid_second = bid_second.split('.')[1][2] + bid.toString().split('.')[1][3]
            bid_third = bid_third.split('.')[1][4]

            ask_second = ask_second.split('.')[1][2] + ask.toString().split('.')[1][3]
            ask_third = ask_third.split('.')[1][4]

        } else {
            bid_first = Math.floor(bid_first) + '.'
            bid_second = bid_second.slice(0, (bid.toString().indexOf("."))+3).split(".")[1]

            ask_first = Math.floor(ask_first) + '.'
            ask_second = ask_second.slice(0, (ask.toString().indexOf("."))+3).split(".")[1]

            if( title === 'XAUUSD') {
                bid_third = '0'
                ask_third = '0'
            } else  {
                if(bid_third.length === 6) {
                    bid_third = '0'
                    ask_third = '0'
                } else {
                    bid_third = bid_third !== undefined ? bid_third[bid_third.length - 1] : 0
                    ask_third = ask_third !== undefined ? ask_third[ask_third.length - 1] : 0
                }

               
            }
            
        }

    }

    return (
        <div >
            <div className={styles.first_row}>
                <div style={{marginRight: '10px'}}>
                <Image alt="currency" src={`/HomeSlider/${title}.svg`} width={30} height={30}/>
                </div>
                <div> { title } </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                    <div className={percentage > 0 ? styles.arrow_up : styles.arrow_down}></div>
                    <div style={{color: percentage > 0 ? '#60BB7D' : '#f00'}}>% { percentage }</div>
                </div>
            </div>

            <div className={styles.second_row}>
                <div style={{fontSize: '10px', marginBottom: '9px'}}>Spread {pips ? pips.toFixed(2): '0.00'} pips</div>
                
                <div className="d-flex">
                    <div className={styles.bid}>
                        <div style={{fontSize: '10px', color: 'grey'}}>Bid</div>
                        <div style={{fontSize:'14px'}}>{bid_first}<span style={{fontSize: '20px'}}>{bid_second}</span><sup style={{fontSize: '14px'}}>{ bid_third }</sup></div>
                        <Link href="https://ascend.everestcm.com/login" >
                            <a className={styles.buy}>Buy</a>
                        </Link>
                    </div>
                    <div className={styles.bid}>
                        <div style={{fontSize: '10px', color: 'grey'}}>Ask</div>
                        <div style={{fontSize:'14px'}}>{ ask_first }<span style={{fontSize: '20px'}}>{ ask_second }</span><sup style={{fontSize: '14px'}}>{ ask_third }</sup></div>
                        <Link href="https://ascend.everestcm.com/login" >
                            <a className={styles.sell}>Sell</a>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TradeCards


// bid percentage calculation:      ((old bid - new bid ) / old bid ) * 100
