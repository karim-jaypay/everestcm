import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Footer/Footer.module.scss'
import { public_url } from '../../variables'

const Footer: NextPage = () => {
    return (
        <div className={styles.bg}>
            <div className="container">
                <div className={styles.titles_div}>
                    <div className={styles.title_content}>
                        <div className={styles.title}>
                            ABOUT US
                        </div>
                        <div className={styles.subtitle}>
                            ABOUT EverestCM
                        </div>
                        <div className={styles.subtitle}>
                            Why Trade with EverestCM
                        </div>
                        <div className={styles.subtitle}>
                            Peace of Mind Trading
                        </div>
                        <div className={styles.subtitle}>
                            Deposits and Withdrawals
                        </div>

                    </div>

                    <div className={styles.title_content}>
                        <div className={styles.title}>
                            TRADING
                        </div>
                        <div className={styles.subtitle}>
                            Trading Account Comparison
                        </div>
                        <div className={styles.subtitle}>
                            Trading Platforms
                        </div>
                        <div className={styles.subtitle}>
                            Range of Markets
                        </div>
                        <div className={styles.subtitle}>
                            Superior Trading Conditions
                        </div>

                    </div>

                    <div className={styles.title_content}>
                        <div className={styles.title}>
                            REGULATION
                        </div>
                        <div className={styles.subtitle}>
                            EverestCM Regulation
                        </div>
                        <div className={styles.subtitle}>
                            Regulated Broker
                        </div>
                        <div className={styles.subtitle}>
                            Anti-Money Laundering
                        </div>
                        <div className={styles.subtitle}>
                            Segregation of Clients&apos; Funds
                        </div>

                    </div>

                    <div className={styles.title_content}>
                        <div className={styles.title}>
                            MARKET ANALYSIS
                        </div>
                        <div className={styles.subtitle}>
                            The Market Analysis Blog
                        </div>
                        <div className={styles.subtitle}>
                            Technical Analysis
                        </div>
                        <div className={styles.subtitle}>
                            Fundamental Analysis
                        </div>
                        <div className={styles.subtitle}>
                            Sentimental Analysis
                        </div>

                    </div>

                    <div className={styles.title_content}>
                        <div className={styles.title}>
                            LEGAL DOCUMENTATIONS
                        </div>
                        <div className={styles.subtitle}>
                            Terms & Conditions
                        </div>
                        <div className={styles.subtitle}>
                            Privacy Policy
                        </div>
                        <div className={styles.subtitle}>
                            Cookies Policy
                        </div>
                    </div>

                </div>

                <div className={styles.socials_div}>
                    <div className={styles.logo}>
                    <Image alt="EverestCM" src={`/uploads/everestcm_97315b83ab.svg?updated_at=2021-12-16T11:32:10.644Z`} width={176} height={40} />
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.social_bg}>
                            <Image className={styles.social} alt="facebook" src={`/uploads/facebook_0ccb18c971.svg?updated_at=2021-12-16T11:32:10.636Z`} width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image className={styles.social} alt="instagram" src={`/uploads/instagram_9f487610a1.svg?updated_at=2021-12-16T11:32:10.638Z`} width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image className={styles.social} alt="twitter" src={`/uploads/twitter_51a155062c.svg?updated_at=2021-12-16T11:32:10.646Z`} width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image className={styles.social} alt="youtube" src={`/uploads/youtube_a171ff2fb6.svg?updated_at=2021-12-16T11:32:11.582Z`} width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image className={styles.social} alt="linkedin" src={`/uploads/linkedin_6a0f7dd1c0.svg?updated_at=2021-12-16T11:32:10.641Z`} width={15} height={15} />
                        </div>
                    </div>
                </div>

                <hr style={{marginBottom:'35px'}} />

                <div className={styles.desc}>
                    <div>The EverestCM brand is owned and operated by Myrtle Ltd with registration number 179291 GBC</div>
                    <br/>
                    <div>
                        <span className="fw-bold">Regulation:</span> Regulation & Licensing Warning: Myrtle Ltd is authorized and regulated by Mauritius Financial Services Commission (FSC) under the license number GB21026300.
                    </div>
                    <br/>
                    <div>
                    HDZ Capital Limited (Registration No. HE422545) with registered Address Iris Tower, 7th floor, Office 740B, 3106, Limassol, Cyprus is acting as payment agent for Myrtle Ltd and its brand (s) including www.everestcm.com. 
                    </div>
                    <br/>
                    <div>
                    <span className="fw-bold">Risk Warning:</span> CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Bearing this in mind, you should not invest more than you can afford to lose. Please read the full Risk Disclosure.
                    </div>
                    <br/>
                    <span className="fw-bold">Regional Restrictions:</span> EverestCM does not provide its services to residents of the USA, Seychelles, Mauritius, North Korea, Iran, Japan, Belgium, Canada and other countries whose domestic regulations classify such investment offering as prohibited.
                </div>
            </div>
        </div>
    )
}

export default Footer
