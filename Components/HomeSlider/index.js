import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/HomeSlider/HomeSlider.module.scss'
import CustomButton from '../CustomButton'

function HomeSlider() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }


    const Cards = () => {
        return (
            <>
                <div className={styles.card_bg}>
                    <div className={styles.first_row}>
                        <div style={{marginRight: '10px'}}>
                        <Image alt="currency" src='/HomeSlider/currency.svg' width={30} height={30}/>
                        </div>
                        <div>EURUSD</div>
                        <div style={{marginLeft: 'auto', display: 'flex'}}>
                            <div className={styles.arrow_down}></div>
                            <div style={{color:'#f00'}}>+0.12%</div>
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

                <div className={styles.card_bg}>
                    <div className={styles.first_row}>
                        <div style={{marginRight: '10px'}}>
                        <Image alt="currency" src='/HomeSlider/currency.svg' width={30} height={30}/>
                        </div>
                        <div>EURUSD</div>
                        <div style={{marginLeft: 'auto', display: 'flex'}}>
                            <div className={styles.arrow_down}></div>
                            <div style={{color:'#f00'}}>+0.12%</div>
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

                <div className={styles.card_bg}>
                    <div className={styles.first_row}>
                        <div style={{marginRight: '10px'}}>
                        <Image alt="currency" src='/HomeSlider/currency.svg' width={30} height={30}/>
                        </div>
                        <div>EURUSD</div>
                        <div style={{marginLeft: 'auto', display: 'flex'}}>
                            <div className={styles.arrow_down}></div>
                            <div style={{color:'#f00'}}>+0.12%</div>
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

                <div className={styles.card_bg}>
                    <div className={styles.first_row}>
                        <div style={{marginRight: '10px'}}>
                        <Image alt="currency" src='/HomeSlider/currency.svg' width={30} height={30}/>
                        </div>
                        <div>EURUSD</div>
                        <div style={{marginLeft: 'auto', display: 'flex'}}>
                            <div className={styles.arrow_down}></div>
                            <div style={{color:'#f00'}}>+0.12%</div>
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
            </>
        )
    }
    return (
        <div>
            <Slider {...settings}>

            {
                // first slider
            }
                <div className={styles.slide_first_bg}>
                    <div className={`${styles.slide_pad} container `}>
                        <div className={styles.slider_div}>
                            <div className="col-lg-6 col-12">
                                <div className={styles.slider_title}>
                                    Trade sky-high <br/> at Everest<span style={{color: '#23A5D6'}}>CM</span> with <br/> <span style={{fontWeight: '900'}}>rock-bottom pricing</span>
                                </div>

                                <div className={`${styles.slider_cards} ${styles.card_mobile}`}>
                                    <Cards />
                                </div>

                                <div className={styles.slider_subtitle}>
                                    Spreads from 0.0 pips & lightening
                                </div>

                                <div>
                                    <CustomButton data='Start Trading' /> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className={` ${styles.slider_cards} ${styles.card_desktop}`}>
                                    <Cards />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            {
                // second slider
            }

                <div className={styles.slide_second_bg}>
                    <div className={`${styles.slide_pad} container `}>
                        <div className="d-flex">
                            <div className="col-lg-6">
                                <div className={styles.slider_title}>
                                    Who needs <br/> desktops when <br/><span className={` main_gradient_two`}>you can trade <br/></span> <span className="main_gradient_two">on the go?</span>
                                </div>

                                <div className={styles.slider_subtitle}>
                                    Same super-low spreads, but now in the palm of
                                </div>

                                <div>
                                    <CustomButton data='Start Trading' /> 
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.slider_second_phone}>
                                    <Image alt="Phone" src="/HomeSlider/slider-2-phone.svg" layout="fill" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            {
                // third slider
            }
                <div className={styles.slide_third_bg}>
                    <div className={`${styles.slide_pad} container `}>
                        <div className="d-flex">
                            <div className="col-lg-6">
                                <div className={styles.slider_title}>
                                    <span style={{color: '#23A5D6'}}>Expand your <br/> Portfolio <br/></span> with our other<br/> competitive assets
                                </div>

                                <div className={styles.slider_subtitle}>
                                    Trade CFDs on Shares, Cryptos, Spot Metals, Energies
                                </div>

                                <div>
                                    <CustomButton data='Start Trading' /> 
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.slider_second_phone}>
                                    <Image alt="Assets" src="/HomeSlider/slider-3-img.svg" layout="fill" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeSlider
