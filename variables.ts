export const categories = ['Forex','Metals',/*'Shares','Commodities','Cryptos',*/'Energies','Indices']

export const filters = ['Majors','Minors','Exotics','All']

export const public_url = process.env.NEXT_PUBLIC_API_URL

interface ILoader {
    src: string,
    width: number,
    quality?: number,
}
export const myLoader = ({ src, width, quality }: ILoader) => {
    return `${public_url}${src}?w=${width}&q=${quality || 75}`
}