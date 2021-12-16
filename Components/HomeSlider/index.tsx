import React from "react";
import { default as Slider, Settings } from "react-slick";
import Image from "next/image";
import parse from "html-react-parser";

import styles from "../../styles/HomeSlider/HomeSlider.module.scss";
import CustomButton from "../CustomButton";

import TradeCards from "../TradeCards";
import { myLoader, public_url } from "../../variables";
import { SliderProps } from '../../interface';

function HomeSlider(props: SliderProps) {
  
  const { data, content } = props;

  // slider settings
  const settings:Settings = {
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
        settings: "unslick",
      },
    ],
  };

  // settings for mobile EUR/USD slick slider
  const trade_settings:Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        }
      },
    ],
  };

  // if there is no data
  let dummy:JSX.Element[] = [];
  if (!data) {
    for (let i = 0; i < 4; i++) {
      dummy.push(
        <div key={i} className={styles.card_bg}>
          <TradeCards
            title={"EURUSD"}
            percentage={"+0.12%"}
            bid={"1.12527"}
            ask={"1.12529"}
          />
        </div>
      );
    }
  }

  return (
    <div>
      <Slider {...settings}>
        {content &&
          content.map((slider, index) => {
            // slider data
            const title = slider.title;
            const subtitle = slider.subtitle;
            const button = slider.button;
            const background = slider.background.data.attributes.url;
            const image = slider.image.data && slider.image.data.attributes.url;

            if (index === 0) {
              return (
                <div key={`slider${index}`}>
                  <div
                    className={styles.slide_first_bg}
                    style={{
                      backgroundImage: `url(${public_url + background})`,
                    }}
                  >
                    <div className={`${styles.slide_pad} container `}>
                      <div className={styles.slider_div}>
                        <div className="col-lg-6 col-12">
                          <div className={` ${styles.slider_title}`}>
                            {parse(title)}
                          </div>

                          <div
                            className={`${styles.slider_cards} ${styles.card_mobile}`}
                          >
                            <Slider {...trade_settings}>
                              {data
                                ? data.map((item, index) => {
                                    const info = item.attributes;

                                    const title = info.title;
                                    const bid = info.bid;

                                    const old = info.oldbid;
                                    const percentage = (
                                      ((bid - old) / old) *
                                      100
                                    ).toFixed(2);

                                    return (
                                      <div
                                        key={` ${title}_mobile `}
                                        className={styles.card_bg}
                                      >
                                        <TradeCards
                                          title={title}
                                          percentage={percentage}
                                          bid={bid}
                                          ask={info.ask}
                                          pips={info.pips}
                                        />
                                      </div>
                                    );
                                  })
                                : dummy.map((item, index) => {
                                    return item;
                                  })}
                            </Slider>
                          </div>

                          <div className={styles.slider_subtitle}>
                            {subtitle}
                          </div>

                          <div>
                            <CustomButton
                              data={button.title}
                              link={button.link}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div
                            className={` ${styles.slider_cards} ${styles.card_desktop}`}
                          >
                            {data
                              ? data.map((item, index) => {
                                  const info = item.attributes;

                                  const title = info.title;
                                  const bid = info.bid;

                                  const old = info.oldbid;
                                  const percentage = (
                                    ((bid - old) / old) *
                                    100
                                  ).toFixed(2);

                                  return (
                                    <div
                                      key={` ${title}_desktop `}
                                      className={styles.card_bg}
                                    >
                                      <TradeCards
                                        title={title}
                                        percentage={percentage}
                                        bid={bid}
                                        ask={info.ask}
                                        pips={info.pips}
                                      />
                                    </div>
                                  );
                                })
                              : dummy.map((item, index) => {
                                  return item;
                                })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else
              return (
                <div key={`slider${index}`}>
                  <div
                    className={styles.slide_second_bg}
                    style={{
                      backgroundImage: `url(${public_url + background})`,
                    }}
                  >
                    <div className={`${styles.slide_pad} container `}>
                      <div className="d-flex">
                        <div className="col-lg-6 col-12">
                          <div className={styles.slider_title}>
                            {parse(title)}
                          </div>

                          <div className={styles.slider_subtitle}>
                            {subtitle}
                          </div>

                          <div>
                            <CustomButton
                              data={button.title}
                              link={button.link}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={styles.slider_second_phone}>
                            <Image
                              alt="Phone"
                              src={image}
                              width={600}
                              height={600}
                              loader={myLoader}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
      </Slider>
    </div>
  );
}

export default React.memo(HomeSlider);
