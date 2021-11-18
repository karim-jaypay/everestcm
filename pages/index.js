import React, { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios'
import Image from 'next/image'

import HomeSlider from '../Components/HomeSlider'
import CustomizedTables from '../Components/MaterialTable'
import PhoneInput from 'react-phone-input-2'
import Tilt from 'react-vanilla-tilt'


import styles from '../styles/Home/Home.module.scss'

export default function Home(props) {

  const [tradeUnits, setTradeUnits] = useState()

  // ref to run fetchData function inside interval after first render
const firstUpdate = useRef(true)

  let data = []

  const fetchData = async () => {
    await axios.get('http://summit-lb-tf-1076725243.eu-west-1.elb.amazonaws.com/quotes/eurusd').then((res) => {
      data.push(res.data)
    }); 
    await axios.get('http://summit-lb-tf-1076725243.eu-west-1.elb.amazonaws.com/quotes/usdjpy').then((res) => {
      data.push(res.data)
    }); 
    await axios.get('http://summit-lb-tf-1076725243.eu-west-1.elb.amazonaws.com/quotes/gbpusd').then((res) => {
      data.push(res.data)
    }); 
    await axios.get('http://summit-lb-tf-1076725243.eu-west-1.elb.amazonaws.com/quotes/xauusd').then((res) => {
      data.push(res.data)
    }); 
    setTradeUnits(data)
  }

  useEffect(() => {

    if (firstUpdate.current) {
      fetchData()
      firstUpdate.current = false;
    }
  
    const interval = setInterval(fetchData, 3000)

    return () => clearInterval(interval)
  }, [tradeUnits])



  const [number, setNumber] = useState('')


  function createData(name, sell, buy, spread, change) {
    return { name, sell, buy, spread, change };
  }
  
  const originalrows = [
    createData('EURUSD', <span className={styles.number_red} >1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span>1.2087<sup>4</sup></span>, <span className={styles.number_green} >1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span className={styles.number_red}>1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span className={styles.number_green}>1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span>1.2087<sup>4</sup></span>, <span className={styles.number_red}>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span className={styles.number_green}>1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span>1.2087<sup>4</sup></span>, <span className={styles.number_red}>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span>1.2087<sup>4</sup></span>, <span className={styles.number_green}>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span className={styles.number_green}>1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
    createData('EURUSD', <span className={styles.number_green}>1.2087<sup>4</sup></span>, <span>1.2056<sup>4</sup></span>, 0.0 + ' pips', -4.34 + ' %'),
  ];

  const [rows, setRows] = useState(originalrows)
  
  return (
      <div>

    {
      // First section Slider
    }
      <section>
        <HomeSlider data={tradeUnits} />
      </section>

        <div className={`${styles.first_circle} ${styles.circle} container`}> 
          <Image alt="" src="/HomeSlider/circle.svg" width={105} height={105} />
        </div>

    {
      // second section table
    }
      <section>
        <div className={`container d-lg-flex ${styles.second_div}`}>
          <div className={`col-lg-5 col-12 ${styles.second_div_content}`}>
            <div className={styles.title_pad}>
              <div className={styles.title}>We weren’t lying when we said <span className="main_color fw-bold">“rock-bottom pricing”</span></div>
              <div className={styles.desc_desktop}>One of our biggest selling points at EverestCM is the pricing we give our traders. You’ll be hard-pressed to find better pricing at any other broker.</div>
            </div>
          </div>
          <div className={`col-lg-7 col-12 ${styles.second_div_content}`}>
              <CustomizedTables allrows={rows}  />
            <div className={styles.desc_mobile}>One of our biggest selling points at EverestCM is the pricing we give our traders. You’ll be hard-pressed to find better pricing at any other broker.</div>
          </div>
        </div>
      </section>

        <div className={`${styles.second_circle} ${styles.circle} container`}> 
          <Image alt="" src="/HomeSlider/circle.svg" width={105} height={105} />
        </div>

    {
      // third section 
    }
      <section style={{overflow:'hidden'}}>
        <div className="container">
          <div className={styles.third_title}>
          <span className="main_color">Our traders ♥ us </span> <br/> <span className={styles.third_subtitle}>because we pride ourselves on the following</span>
          </div>
          
          <div className={styles.third_cards_div}>
            <div className={`${styles.third_card} ${styles.third_card_marg}`}>
              <div className={`${styles.card_content}`}>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_first.svg" width={75} height={75} />
                  </div>
                  <div className={styles.third_card_desc_hover}>
                    Ultra competitive spreads on hundreds of hundreds hundreds
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.third_card} ${styles.third_card_marg}`}>
              <div className={`${styles.card_content}`}>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_second.svg" width={75} height={75}  />
                  </div>
                  <div className={styles.third_card_desc_hover}>
                  Outstandingly fast trading execution. Less than 10ms!
                  </div>
                </div>
              </div>
            </div>

            <div className={` ${styles.third_card} ${styles.third_card_marg_mob} `}>
              <div className={`${styles.card_content}`}>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_third.svg" width={75} height={75} />
                  </div>
                  <div>
                  Leverage our deep liquidity to get the best possible pricing.
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.third_card} ${styles.card_blank} ${styles.third_card_marg}`}>
              <div>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_fourth.svg" width={75} height={75} />
                  </div>
                  <div>
                    Ultra competitive spreads on hundreds of
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.third_card} ${styles.third_card_marg}`}>
              <div className={`${styles.card_content}`}>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_fourth.svg" width={75} height={75} />
                  </div>
                  <div>
                  Really low latency due to our best-in-class data centres.
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.third_card}`}>
              <div className={`${styles.card_content}`}>
                <div className={styles.third_card_content}>
                  <div className={styles.third_card_icon}>
                  <Image alt="" src="/HomePage/card_last.svg" width={75} height={75} />
                  </div>
                  <div>
                  Raw spreads at
                  0.0 pips or zero commission at 0.5.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className={`${styles.circle} container`}> 
          <Image alt="" src="/orange_circle.svg" width={105} height={105} />
      </div>

    {
      // fourth section
    }
      <section>
        <div className="container">
          <div className={styles.fourth_title}>
            EverestCM&apos;s Range of
          </div>
          <div className={`text-center w-75 mx-auto ${styles.fourth_desc} `}>You’re unique, and your trading habits differ from others, which is why we offer 3 different award-winning trading platforms. Each one leverages our outstanding low pricing, ultra-fast execution, and access to our deep liquidity pools.</div>
          <Tilt className={styles.tilt} options={{ max: 15, glare: true}}>
          <div className={styles.fourth_image}>
          <Image alt="EverestCM PC" src="/HomePage/computer.svg" layout="fill"/>
          </div>
          </Tilt>

          <div className={styles.fourth_cards}>
            <div className={styles.fourth_card}>
                <div className="d-flex">
                  <Image alt="Meta" src="/HomePage/meta.svg" width={75} height={75} />
                  <div className="ms-2 my-auto">
                    <div className="fw-bold">MT4</div>
                    <div>by Metaquotes</div>
                  </div>
                </div>

                <div className="mt-3">MetaTrader 4 is the classic trading platform all traders know and love.</div>

            </div>

            <div className={styles.fourth_card}>
                <div className="d-flex">
                  <Image alt="Meta" src="/HomePage/meta.svg" width={75} height={75} />
                  <div className="ms-2 my-auto">
                    <div className="fw-bold">MT5</div>
                    <div>by Metaquotes</div>
                  </div>
                </div>

                <div className="mt-3">The upgraded version of its predecessor. MT5 is gathering momentum!</div>

            </div>

            <div className={` ${styles.fourth_card} ${styles.border_gradient}`}>
                <div className="d-flex">
                  <Image alt="Meta" src="/HomePage/everest.svg" width={75} height={75} />
                  <div className="ms-2 my-auto">
                    <div className="fw-bold">SUMMIT</div>
                    <div>by EverestCM</div>
                  </div>
                </div>

                <div className="mt-3">Our own bespoke trading platform which is aimed at beginner traders.</div>

            </div>

          </div>
        </div>
      </section>

      <div className={`${styles.first_circle} ${styles.circle} container`}> 
          <Image alt="" src="/HomeSlider/circle.svg" width={105} height={105} />
      </div>

    {
      // fifth section
    }
      <section>
        <div className="container">
          <div className={styles.fifth_title}>Trade the Markets <br/> <div className={styles.fifth_sub}>On Your Mobile</div></div>
          <div className={styles.fifth_desc}>Enjoy all the great features of the EverestCM desktop trading experience on your iPhone or Android device.</div>

          <div className={` ${styles.fourth_image} ${styles.fifth_image_mobile} `}>
            <Image alt="Phone" src="/HomePage/phone.svg" layout="fill"/>
          </div>
          
        <div className="d-flex mt-5 mb-5">
          <div className="col-lg-5 col-12">
            <div className={styles.fifth_left_pad}>
              <div className={styles.fifth_left_title}>Get an <br/> EverestCM <br/> Account <span className="main_color">Via <br/>SMS!</span></div>
            </div>

            <div className={styles.input_mobile}>
              <div id="custom_number" className="mb-5">
                <PhoneInput
                placeholder="Enter your mobile number"
                country={'cy'}
                value={number}
                onChange={setNumber}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex">
            <div className={` ${styles.fourth_image} ${styles.fifth_image_desk} `} >
            <Image alt="Phone" src="/HomePage/phone.svg" layout="fill"/>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className={`${styles.blue_circle} ${styles.circle} container`}> 
          <Image alt="" src="/blue_circle.svg" width={105} height={105} />
      </div>

      {
        // sixth section
      }

      <section className={styles.sixth_sect}>
        <div className="container">
          <div className={styles.chart_bg}>
            <div className="col-xl-4 col-12">
              <div className={styles.fifth_left_pad}>
                <div className={styles.sixth_left_title}>Our Trading Tools <br/> Take Your Trades <br/> to the <br/><span className={`main_gradient ${styles.sixth_title_grad}`}>Next Level!</span></div>
              </div>
              <div className={styles.sixth_left_desc}>EverestCM traders are given access to a complete suite of trading tools which are designed to enhance your trades. </div>
              
            </div>

            <div className="col-xl-8 col-12">
                  <div className={styles.FirstAndLast_row}>
                    <div className={styles.sixth_card}>
                        <Image alt="Autochartist" src="/HomePage/Autochartist.svg" width={60} height={60} />
                        <div>Autochartist</div>
                    </div>
                    <div className={styles.sixth_card}>
                        <Image alt="Analysis" src="/HomePage/loup.svg" width={60} height={60} />
                        <div>Analysis</div>
                    </div>
                  </div>

                  <div className={styles.second_row}>
                    <div className={styles.sixth_card}>
                      <Image alt="Signal" src="/HomePage/market.svg" width={60} height={60} />
                        <div>Signal</div>
                    </div>
                    <div className={styles.sixth_card}>
                        <Image alt="Calculator" src="/HomePage/calculator.svg" width={60} height={60} />
                        <div>Calculator</div>
                    </div>
                  </div>

                  <div className={styles.FirstAndLast_row}>
                    <div className={styles.sixth_card}>
                      <Image alt="Education" src="/HomePage/graduation.svg" width={60} height={60} />
                        <div>Education</div>
                    </div>
                    <div className={styles.sixth_card}>
                        <Image alt="VPS" src="/HomePage/vps.svg" width={60} height={60} />
                        <div>VPS</div>
                    </div>
                  </div>
            </div>
          </div>

        </div>
      </section>

      {
        // seventh section
      }

      <section className={styles.seventh_sect}>
        <div className="container">
          <div className={styles.seventh_bg}>
            <div className={` col-lg-6 col-12 ${styles.seventh_content}`}>
              <div className={styles.seventh_title}>
                Seamless <br/> <span className={styles.seventh_sub}>Deposits</span>
              </div>
              <div className={styles.seventh_desc}>Zero fees when it comes to topping up or withdrawing your funds from your EverestCM account. We’ve partnered with some of the leading payment service solutions providers in the world.</div>
            </div>

            <div className="col-lg-6 col-12">
              <div className={styles.image_div}>
                <div className={styles.seventh_image}>
                  <Image alt="credit card" src="/HomePage/credit_card.svg" width={370} height={240} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.accounts}>
        <div className={styles.account}>
        <Image alt="visa" src="/HomePage/VISA.svg" width={80} height={37} />
        </div>

        <div className={styles.account}>
        <Image alt="Master Card" src="/HomePage/MASTERCARD.svg" width={80} height={37} />
        </div>
        
        <div className={styles.account}>
        <Image alt="Skrill" src="/HomePage/SKRILL.svg" width={80} height={37} />
        </div>

        <div className={styles.account}>
        <Image alt="Neteller" src="/HomePage/NETELLER.svg" width={80} height={37} />
        </div>

        <div className={styles.account}>
        <Image alt="Cryptos" src="/HomePage/CRYPTOS.svg" width={80} height={37} />
        </div>

        <div className={styles.account}>
        <Image alt="Bank Wire" src="/HomePage/BANK-WIRE.svg" width={80} height={37} />
        </div>
      </div>

      </div>

      
  )
}
