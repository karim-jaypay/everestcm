import React from 'react'
import Link from 'next/link'
import { IButton } from '../interface'

function CustomButton({ data, link }:IButton) {
    

    const button_style = {
        background: '#23A5D6',
        color: 'white',
        marginRight: '15px',
        textDecoration: 'none',
        padding: '15px 50px',
        fontSize: '20px'
    }
    return (
        <div>
            <Link href={link ? link : ''} passHref={true}>
                <a style={button_style}>{ data }</a>
            </Link>
        </div>
    )
}

export default CustomButton
