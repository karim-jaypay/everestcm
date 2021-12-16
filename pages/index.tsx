import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";

import HomeSlider from "../Components/HomeSlider";
import CustomizedTables from "../Components/MaterialTable";
import PhoneInput from "react-phone-input-2";
import Tilt from "react-parallax-tilt";

import styles from "../styles/Home/Home.module.scss";
import { categories, filters, myLoader, public_url } from "../variables";
import { IHome } from "../interface";
import { loadTradingCards } from "../redux/thunks/quotesThunk";

export default function Home({ content, slider }: IHome) {
  const {
    second,
    third,
    third_card,
    fourth,
    fourth_image,
    fourth_card,
    fifth,
    fifth_title,
    fifth_image,
    sixth,
    sixth_card,
    seventh,
    background,
    seventh_image,
    pay_icon,
  }: any = content;

  // states
  const [number, setNumber] = useState("");

  // ref to run fetchData function inside interval after first render
  const firstUpdate = useRef(true);

  // redux
  const dispatch = useDispatch();

  // get trade quotes
  const fetchData = () => {
    dispatch(loadTradingCards());
  };
  const tradeUnits = useSelector((state: any) => state.quotes.tradingCards);

  useEffect(() => {
    // run this api once when page loads
    if (firstUpdate.current) {
      fetchData();
      firstUpdate.current = false;
    }
    // then run it every 3 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {
        // First section Slider
      }
      <section>
        <HomeSlider data={tradeUnits} content={slider} />
      </section>

      <div className={`${styles.first_circle} ${styles.circle} container`}>
        <Image alt="circle" src={`/uploads/circle_791d922dc0.svg?updated_at=2021-12-16T11:26:02.706Z`} loader={myLoader} width={105} height={105} />
      </div>

      {
        // second section table
      }
      <section>
        <div className={`container d-lg-flex ${styles.second_div}`}>
          <div className={`col-lg-5 col-12 ${styles.second_div_content}`}>
            <div className={styles.title_pad}>
              <div className={styles.title}>{parse(second.title)}</div>
              <div className={styles.desc_desktop}>{second.subtitle}</div>
            </div>
          </div>
          <div className={`col-lg-7 col-12 ${styles.second_div_content}`}>
            <CustomizedTables categories={categories} filters={filters} />
            <div className={styles.desc_mobile}>{second.subtitle}</div>
          </div>
        </div>
      </section>

      <div className={`${styles.second_circle} ${styles.circle} container`}>
        <Image alt="circle" src={`/uploads/circle_791d922dc0.svg?updated_at=2021-12-16T11:26:02.706Z`} width={105} height={105} />
      </div>

      {
        // third section
      }
      <section style={{ overflow: "hidden" }}>
        <div className="container">
          <div className={styles.third_title}>
            <span className="main_color">{third.title} </span> <br />{" "}
            <span className={styles.third_subtitle}> {third.subtitle} </span>
          </div>

          <div className={styles.third_cards_div}>
            {third_card.map((card: any, index: Number) => {
              const icon = card.icon.data && card.icon.data.attributes.url;

              return (
                <div
                  key={`thirdicon${card.id}`}
                  className={`${styles.third_card} ${
                    index === third_card.length - 1
                      ? ""
                      : index !== 2
                      ? styles.third_card_marg
                      : styles.third_card_marg_mob
                  } ${index === 3 && styles.card_blank} `}
                >
                  <div className={`${styles.card_content}`}>
                    <div className={styles.third_card_content}>
                      <div className={styles.third_card_icon}>
                        <Image
                          alt=""
                          src={icon}
                          loader={myLoader}
                          width={75}
                          height={75}
                        />
                      </div>
                      <div className={styles.third_card_desc_hover}>
                        {card.title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={`${styles.circle} container`}>
        <Image alt="circle" src={`/uploads/orange_circle_46eaf7efb2.svg?updated_at=2021-12-16T11:28:43.105Z`} width={105} height={105} />
      </div>

      {
        // fourth section
      }
      <section>
        <div className="container">
          <div className={styles.fourth_title}>{fourth.title}</div>
          <div className={`text-center w-75 mx-auto ${styles.fourth_desc} `}>
            {fourth.subtitle}
          </div>
          <Tilt className={styles.tilt} tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <Image
              alt={fourth_image.data.attributes.name}
              src={fourth_image.data.attributes.url}
              loader={myLoader}
              width={1236}
              height={696}
            />
          </Tilt>

          <div className={styles.fourth_cards}>
            {fourth_card.map((card: any, index: number) => {
              const { title, subtitle, description, icon } = card;

              return (
                <div key={`range${card.id}`} className={styles.fourth_card_div}>
                  <div className={styles.fourth_card}>
                    <div className="d-flex">
                      <Image
                        alt={title}
                        src={icon.data.attributes.url}
                        loader={myLoader}
                        width={75}
                        height={75}
                      />
                      <div className="ms-2 my-auto">
                        <div className="fw-bold">{title}</div>
                        <div>{subtitle}</div>
                      </div>
                    </div>

                    <div className="mt-3">{description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={`${styles.first_circle} ${styles.circle} container`}>
        <Image alt="circle" src={`/uploads/circle_791d922dc0.svg?updated_at=2021-12-16T11:26:02.706Z`} width={105} height={105} />
      </div>

      {
        // fifth section
      }
      <section>
        <div className="container">
          <div className={styles.fifth_title}>{parse(fifth.title)}</div>
          <div className={styles.fifth_desc}>{fifth.subtitle}</div>

          <div className={` ${styles.fifth_image_mobile} `}>
            <Image
              alt="Phone"
              src={fifth_image.data.attributes.url}
              loader={myLoader}
              width={1903}
              height={1023}
            />
          </div>

          <div className="d-flex mt-5 mb-5">
            <div className="col-lg-5 col-12">
              <div className={` ${styles.fifth_left_pad}`}>
                <div className={` ${styles.fifth_left_title} `}>
                  {" "}
                  {parse(fifth_title)}{" "}
                </div>
              </div>

              <div className={styles.input_mobile}>
                <div id="custom_number" className={`mb-5 `}>
                  <PhoneInput
                    placeholder="Enter your mobile number"
                    country={"cy"}
                    value={number}
                    onChange={setNumber}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex">
              <div className={` ${styles.fifth_image_desk} `}>
                <Image
                  alt="Phone"
                  src={fifth_image.data.attributes.url}
                  loader={myLoader}
                  width={1903}
                  height={1723}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.blue_circle} ${styles.circle} container`}>
        <Image alt="circle" src={`/uploads/blue_circle_0a513abe36.svg?updated_at=2021-12-16T11:29:43.483Z`} width={105} height={105} />
      </div>

      {
        // sixth section
      }

      <section className={styles.sixth_sect}>
        <div className="container">
          <div className={styles.chart_bg}>
            <div className="col-xl-4 col-12">
              <div className={styles.fifth_left_pad}>
                <div className={styles.sixth_left_title}>
                  {parse(sixth.title)}
                </div>
              </div>
              <div className={styles.sixth_left_desc}>{sixth.subtitle}</div>
            </div>

            <div className="col-xl-7 col-lg-10 mx-auto col-12">
              <div className={styles.FirstAndLast_row}>
                {sixth_card.map((card: any, index: number) => {
                  return (
                    <div
                      key={`tool${card.id}`}
                      className={` ${index === 2 && "ms-auto"} ${
                        styles.sixth_card
                      }`}
                    >
                      <Image
                        alt={card.title}
                        src={card.icon.data.attributes.url}
                        loader={myLoader}
                        width={60}
                        height={60}
                      />
                      <div>{card.title}</div>
                      <div className={styles.sixth_wave}></div>
                    </div>
                  );
                })}
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
          <div
            className={styles.seventh_bg}
            style={{
              background: `url(${
                public_url + background.data.attributes.url
              }) no-repeat center center`,
            }}
          >
            <div className={` col-lg-6 col-12 ${styles.seventh_content}`}>
              <div className={styles.seventh_title}>{parse(seventh.title)}</div>
              <div className={styles.seventh_desc}>{seventh.subtitle}</div>
            </div>

            <div className="col-lg-6 col-12">
              <div className={styles.image_div}>
                <div className={styles.seventh_image}>
                  <Image
                    alt={seventh_image.data.attributes.name}
                    src={seventh_image.data.attributes.url}
                    loader={myLoader}
                    width={370}
                    height={240}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.accounts}>
        {pay_icon.map((icon: any, index: number) => {
          return (
            <div key={icon.id} className={styles.account}>
              <Image
                alt="visa"
                src={icon.icon.data.attributes.url}
                loader={myLoader}
                width={80}
                height={37}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// get dynamic data from database
export async function getStaticProps() {
  let content: any;
  await axios
    .get(`${public_url}/api/home`)
    .then((res) => {
      content = res.data.data.attributes;
    })
    .catch((err) => console.log(err));

  return {
    props: { slider: content.HomeSlider, content },
  };
}
