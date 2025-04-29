import { ChartData, CoinData, Data, PNG } from "../utils/schema";
import axios, { AxiosResponse } from "axios";

const API_KEY = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : null


const getTableData = async (offset: number): Promise<CoinData[]> => {

    const response: AxiosResponse<Data> = await axios.get<Data>(`https://rest.coincap.io/v3/assets?apiKey=${API_KEY}&offset=${offset}&limit=25`);
    const fetchedData = response.data.data || [];

    const newPNGS: PNG[] = fetchedData.map((coin) => ({
        symbol: coin.symbol,
        src: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
    }));

    newPNGS.forEach(png => {
        fetchedData.forEach(coin => {
            if (png.symbol === coin.symbol) {
                coin.PNGSRC = png.src;
            }
        })
    })
    return fetchedData;
}

const getChartsData = async(interval: string, coinName: string): Promise<ChartData[]> => {

    const response: AxiosResponse<{data: ChartData[]}> = await axios.get<{data: ChartData[]}>(`https://rest.coincap.io/v3/assets/${coinName.toLowerCase()}/history?apiKey=${API_KEY}&interval=${interval}`);

    return response.data.data;
}

const getCoinData = async(coinName: string): Promise<CoinData> => {
    const response: AxiosResponse<{data: CoinData}> = await axios.get<{data: CoinData}>(`https://rest.coincap.io/v3/assets/${coinName}?apiKey=${API_KEY}`);
    const fetchedData = response.data.data || [];

    fetchedData.PNGSRC = `https://assets.coincap.io/assets/icons/${fetchedData.symbol.toLowerCase()}@2x.png`

    return fetchedData;
}

export { getTableData, getChartsData, getCoinData };