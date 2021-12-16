import type { ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Header/Header.module.scss'

export default function Layout({ children }: any) {
    return (
        <>
        <div className="content">
            <Header />
            <div className={styles.header_top}>
            { children }
            </div>
        </div>
        <Footer />
        </>
    )
}