import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Header/Header.module.scss'

const Header: NextPage = () => {
    return (
        <header className={` ${styles.container} container`}>
            <nav className="d-flex">
                <Link href="/" passHref={true}>
                <Image alt="EverestCM" src={`/uploads/everestcm_97315b83ab.svg?updated_at=2021-12-16T11:32:10.644Z`} width={176} height={40} className={styles.header_logo} />
                </Link>

                <ul className={styles.right}>
                    <li>
                        <Link href="https://my.everestcm.com/login" passHref={true} >
                            <a className={styles.button_live}> OPEN LIVE ACCOUNT </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="https://my.everestcm.com/login" passHref={true}>
                            <a className={styles.button_demo}> OPEN DEMO ACCOUNT </a>
                        </Link>
                    </li>

                    <li className={` d-flex ${styles.menu} `}>
                        <Image alt="Menu" src='/Header/menuIcon.svg' width={22} height={10} />
                        <div className={styles.menu_icon}>Menu</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
