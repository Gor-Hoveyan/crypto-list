import { Data, PNG } from "../utils/schema";
import axios, { AxiosResponse } from "axios";

const getData: any = async (offset: number) => {

    const response: AxiosResponse<Data> = await axios.get<Data>(`https://api.coincap.io/v2/assets?offset=${offset}&limit=25`);
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

export { getData };