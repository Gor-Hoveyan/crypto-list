import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "./reducers/currenciesSlice";

const store = configureStore({
    reducer: {
        currenciesSlice: currenciesSlice
    },
})


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;