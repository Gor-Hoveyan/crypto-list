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

export type {CoinData, Data, PNG};