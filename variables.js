export const categories = ['Forex','Metals',/*'Shares','Commodities','Cryptos',*/'Energies','Indices']

export const filters = ['Majors','Minors','Exotics','All']

export const getImage = process.env.NEXT_PUBLIC_API_URL

export const myLoader = ({ src, width, quality }) => {
    return `${getImage}${src}?w=${width}&q=${quality || 75}`
}