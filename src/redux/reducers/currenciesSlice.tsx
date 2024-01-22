import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CoinData } from "../../utils/schema";
import { getData } from "../../api/api";


interface FetchDataParams {
    offset: number;
}

export const fetchData = createAsyncThunk<CoinData[], FetchDataParams>(
    'data/FetchData',
    async ({ offset }) => {
        const data: CoinData[] = await getData(offset);
        return data;
    }
);

type InitialState = {
    data: CoinData[],
    isDataLoading: boolean,
    paginationNumbers: number[],
    currentPage: number,
    offset: number,
    sortType: string,
    isDarkMode: boolean,
    language: string,
    isMenuOpened: boolean,
    currentCoinData: CoinData | undefined
}

const initialState: InitialState = {
    data: [],
    isDataLoading: false,
    paginationNumbers: [],
    currentPage: 1,
    offset: 0,
    sortType: '',
    isDarkMode: false,
    language: 'en',
    isMenuOpened: false,
    currentCoinData: undefined
}

const currenciesSlice = createSlice({
    name: 'currenciesSlice',
    initialState,
    reducers: {
        setIsDataLoading: (state, action: PayloadAction<boolean>) => {
            state.isDataLoading = action.payload;
        },
        setData: (state, action: PayloadAction<CoinData[]>) => {
            state.data = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setPaginationNumbers: (state) => {
            let arr: number[] = [];
            let offset: number = state.currentPage;
            for (let i = 1; i <= 4; i++) {
                if (offset > 0 && offset - i > 0) {
                    arr.push(offset - i);
                } else {
                    arr.push(i + 4);
                }
                arr.push(offset + i);
            }

            arr.push(offset);
            let uniqSet = new Set(arr);
            arr = Array.from(uniqSet);
            arr.sort((a, b) => a - b);

            if (offset === 0) {
                delete arr[0];
                delete arr[1];
            } else if (offset >= 0 && offset <= 6) {
                delete arr[0];
            }
            state.paginationNumbers = arr;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        sortTable: (state, action: PayloadAction<string>) => {
            if (action.payload === 'byHigherPrice') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.priceUsd) - Number(secondCoin.priceUsd))).reverse();
            } else if (action.payload === 'byLowerPrice') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.priceUsd) - Number(secondCoin.priceUsd)));
            } else if (action.payload === 'byHigherRank') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.rank) - Number(secondCoin.rank)));
            } else if (action.payload === 'byLowerRank') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.rank) - Number(secondCoin.rank))).reverse();
            } else if (action.payload === 'byHigherMarkCap') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.marketCapUsd) - Number(secondCoin.marketCapUsd)));
            } else if (action.payload === 'byLowerMarkCap') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.marketCapUsd) - Number(secondCoin.marketCapUsd))).reverse();
            } else if (action.payload === 'byHigherVol') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.volumeUsd24Hr) - Number(secondCoin.volumeUsd24Hr))).reverse();
            } else if (action.payload === 'byLowerVol') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.volumeUsd24Hr) - Number(secondCoin.volumeUsd24Hr)));
            } else if (action.payload === 'byHigherCircSup') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.supply) - Number(secondCoin.supply))).reverse();
            } else if (action.payload === 'byLowerCircSup') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.supply) - Number(secondCoin.supply)));
            } else if (action.payload === 'byHigherAVG') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.vwap24Hr) - Number(secondCoin.vwap24Hr))).reverse();
            } else if (action.payload === 'byLowerAVG') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.vwap24Hr) - Number(secondCoin.vwap24Hr)));
            } else if (action.payload === 'byHigherChange') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.changePercent24Hr) - Number(secondCoin.changePercent24Hr))).reverse();
            } else if (action.payload === 'byLowerChange') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => (Number(firstCoin.changePercent24Hr) - Number(secondCoin.changePercent24Hr)));
            } else if (action.payload === 'byHigherName') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => firstCoin.name.localeCompare(secondCoin.name)).reverse();
            } else if (action.payload === 'byLowerName') {
                state.data = state.data.sort((firstCoin: CoinData, secondCoin: CoinData) => firstCoin.name.localeCompare(secondCoin.name));
            }
            state.sortType = action.payload;
        },
        setIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
        setIsMenuOpened: (state) => {
            state.isMenuOpened = !state.isMenuOpened;
        },
        setCurrentCoinData: (state, action: PayloadAction<string | undefined>) => {
            if (action.payload) {
                state.data.map(coin => {
                    if (coin.name === action.payload) {
                        state.currentCoinData = coin;
                    }
                })
            }

        }
    }
})

export default currenciesSlice.reducer;
export const { setIsDataLoading,
    setData,
    setPaginationNumbers,
    setOffset,
    sortTable,
    setIsDarkMode,
    setCurrentPage,
    changeLanguage,
    setIsMenuOpened,
    setCurrentCoinData
} = currenciesSlice.actions;