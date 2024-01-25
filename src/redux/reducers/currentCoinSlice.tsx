import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ChartData, ChartInterval, CoinData } from "../../utils/schema";
import { getChartsData, getCoinData } from "../../api/api";

interface fetchChartsDataParams {
    interval: string,
    coinName: string,
}

interface fetchCoinDataParams {
    coinName: string
}

type InitialState = {
    data: CoinData,
    chartsData: ChartData[],
    chartInterval: {
        m1: boolean,
        m5: boolean,
        m15: boolean,
        m30: boolean,
        h1: boolean,
        h2: boolean,
        h6: boolean,
        h12: boolean,
    }
}

export const fetchChartsData = createAsyncThunk<ChartData[], fetchChartsDataParams>(
    'data/fetchChartsData',
    async ({ interval, coinName }) => {
        const chartsData: ChartData[] = await getChartsData(interval, coinName);
        return chartsData;
    }
)

export const fetchCoinData = createAsyncThunk<CoinData, fetchCoinDataParams>(
    'data/fetchCoinData',
    async ({ coinName }) => {
        const coinData: CoinData = await getCoinData(coinName);
        return coinData;
    }
)

const initialState: InitialState = {
    data: {
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
        changePercent24Hr: '',
        vwap24Hr: '',
        explorer: '',
    },
    chartsData: [],
    chartInterval: {
        m1: false,
        m5: false,
        m15: false,
        m30: false,
        h1: false,
        h2: false,
        h6: false,
        h12: false,
    }
};

const currentCoinSlice = createSlice({
    name: 'currentCoinSlice',
    initialState,
    reducers: {
        setCurrentCoinData: (state, action: PayloadAction<CoinData>) => {
            state.data = action.payload;
        },
        setChartsData: (state, action: PayloadAction<ChartData[]>) => {
            state.chartsData = action.payload;
        },
        setChartInterval: (state, action: PayloadAction<ChartInterval>) => {
            state.chartInterval = {
                m1: false,
                m5: false,
                m15: false,
                m30: false,
                h1: false,
                h2: false,
                h6: false,
                h12: false,
            };
            state.chartInterval[action.payload] = !state.chartInterval[action.payload];
            console.log(state.chartInterval);
        }
    }
});

export default currentCoinSlice.reducer;
export const { setCurrentCoinData, setChartsData, setChartInterval } = currentCoinSlice.actions;