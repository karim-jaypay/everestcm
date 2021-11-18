import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import styles from '../../styles/HomeSlider/HomeSlider.module.scss'
import CustomButton from '../CustomButton'

import TradeCards from '../TradeCards'

function HomeSlider(props) {

    const { data } = props

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick"
            }
        ]
    }

    // settings for mobile EUR/USD slick slider
    const trade_settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        ]
    }


    
    return (
        <div>
            <Slider {...settings}>

            {
                // first slider
            }
                <div key="slider1" className={styles.slide_first_bg}>
                    <div className={`${styles.slide_pad} container `}>
                        <div className={styles.slider_div}>
                            <div className="col-lg-6 col-12">
                                <div className={` ${styles.slider_title}`}>
                                    Trade sky-high <br/> at Everest<span style={{color: '#23A5D6'}}>CM</span> with <br/> <span style={{fontWeight: '900'}}>rock-bottom <br/> pricing</span>
                                </div>

                                <div className={`${styles.slider_cards} ${styles.card_mobile}`}>
                                    <Slider {...trade_settings}>
                                        { data && data.map((item, index) => {

                                            const title = Object.keys(data[index])[0]
                                        
                                            return (
                                                <div key={` ${title}_mobile `} className={styles.card_bg}>
                                                <TradeCards title={title} percentage={'+0.12%'} bid={item[title].bid} ask={item[title].ask} />
                                                </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>

                                <div className={styles.slider_subtitle}>
                                    Spreads from 0.0 pips & lightening
                                </div>

                                <div>
                                    <CustomButton data='Start Trading' link="https://ascend-mu.everestcm.com/register/" /> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className={` ${styles.slider_cards} ${styles.card_desktop}`}>
                                { data && data.map((item, index) => {

                                    const title = Object.keys(data[index])[0]
                        
                                    return (
                                        <div key={` ${title}_desktop `} className={styles.card_bg}>
                                        <TradeCards title={title} percentage={'+0.12%'} bid={item[title].bid} ask={item[title].ask}/>
                                        </div>
                                        )
                                    })
                                }
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            {
                // second slider
            }

                <div key="slider2" className={styles.slide_second_bg}>
                    <div className={`${styles.slide_pad} container `}>
                        <div className="d-flex">
                            <div className="col-lg-6 col-12">
                                <div className={styles.slider_title}>
                                    Who needs <br/> desktops when <br/><span className={` main_gradient_two`}>you can trade <br/></span> <span className="main_gradient_two">on the go?</span>
                                </div>

                                <div className={styles.slider_subtitle}>
                                    Same super-low spreads, but now in the palm of
                                </div>

                                <div>
                                    <CustomButton data='Start Trading' link="https://ascend-mu.everestcm.com/register/" /> 
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
                <div key="slider3" className={styles.slide_third_bg}>
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
                                    <CustomButton data='Start Trading' link="https://ascend-mu.everestcm.com/register/" /> 
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
