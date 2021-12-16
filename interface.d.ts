import { categories } from './variables';
// general
export interface IButton {
    data: string,
    link: string
}


export interface IHome {
    content: object,
    slider: object[]
}

// trade card 
export interface ITradeCard {
    title: string,
    percentage: number,
    bid: number,
    ask: number,
    pips: number
}

// material table 
export interface IMaterialTable {
    categories: string[]
    filters: string[]
}

// Slider Types
export interface SliderProps {
    data: [{
        attributes: {
            title: string,
            bid: number,
            oldbid: number,
            ask: number,
            pips: number
        }
    }],
    content: [{
        title: string,
        subtitle: string,
        button: {
            title: string,
            link: string
        },
        background: {
            data: {
                attributes: {
                    url: string
                }
            }
        },
        image: {
            data: {
                attributes: {
                    url: string
                }
            }
        },
    }]
} 