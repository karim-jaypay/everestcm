import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/HomeSlider/HomeSlider.module.scss'

function TradeCards(props) {

    const { image, title, percentage, bid, ask } = props

    return (
        <div className={styles.card_bg}>
            <div className={styles.first_row}>
                <div style={{marginRight: '10px'}}>
                <Image alt="currency" src='/HomeSlider/currency.svg' width={30} height={30}/>
                </div>
                <div> { title } </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                    <div className={styles.arrow_down}></div>
                    <div style={{color:'#f00'}}>{ percentage }</div>
                </div>
            </div>

            <div className={styles.second_row}>
                <div style={{fontSize: '10px', marginBottom: '9px'}}>Spread 0.0 pips</div>
                
                <div className="d-flex">
                    <div className={styles.bid}>
                        <div style={{fontSize: '10px', color: 'grey'}}>Bid</div>
                        <div style={{fontSize:'14px'}}>1.20<span style={{fontSize: '20px'}}>56</span><sup style={{fontSize: '14px'}}>4</sup></div>
                        <Link href="" >
                            <a className={styles.buy}>Buy</a>
                        </Link>
                    </div>
                    <div className={styles.bid}>
                        <div style={{fontSize: '10px', color: 'grey'}}>Ask</div>
                        <div style={{fontSize:'14px'}}>1.20<span style={{fontSize: '20px'}}>56</span><sup style={{fontSize: '14px'}}>4</sup></div>
                        <Link href="" >
                            <a className={styles.sell}>Sell</a>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TradeCards
