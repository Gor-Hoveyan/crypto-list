import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "./reducers/currenciesSlice";
import currentCoinSlice from "./reducers/currentCoinSlice";

const store = configureStore({
    reducer: {
        currenciesSlice: currenciesSlice,
        currentPageSlice: currentCoinSlice,
    },
})


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;