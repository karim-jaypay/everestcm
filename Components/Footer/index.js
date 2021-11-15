import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Footer/Footer.module.scss'

function Footer() {
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
                    <Image alt="EverestCM" src="/Footer/everestcm.svg" width={176} height={40} />
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.social_bg}>
                            <Image alt="facebook" src="/Footer/facebook.svg" width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image alt="instagram" src="/Footer/instagram.svg" width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image alt="twitter" src="/Footer/twitter.svg" width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image alt="youtube" src="/Footer/youtube.svg" width={15} height={15} />
                        </div>
                        <div className={styles.social_bg}>
                            <Image alt="linkedin" src="/Footer/linkedin.svg" width={15} height={15} />
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
