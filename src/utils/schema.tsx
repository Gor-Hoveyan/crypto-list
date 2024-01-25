type CoinData = {
    id:  string ,
    rank:  string,
    symbol:  string,
    name:  string,
    supply:  string,
    maxSupply:  string,
    marketCapUsd:  string,
    volumeUsd24Hr:  string,
    priceUsd:  string,
    changePercent24Hr:  string,
    vwap24Hr:  string,
    explorer:  string,
    PNGSRC?: string,
}

type Data = {data: CoinData[]};

type PNG = {
    symbol: string,
    src: string
}

type ChartData = {
    priceUsd: string,
    time: string,
    date: string,
}

type ChartInterval = 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12';

export type {CoinData, Data, PNG, ChartData, ChartInterval};