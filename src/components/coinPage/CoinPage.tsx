import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { setCurrentCoinData } from "../../redux/reducers/currenciesSlice";

function CoinPage() {
    const coinData = useAppSelector(state => state.currenciesSlice.currentCoinData);
    const dispatch = useAppDispatch();
    const { coinName } = useParams();

    useEffect(() => {
        dispatch(setCurrentCoinData(coinName));
    })

    return (
        <div>
            {coinData?.name}
        </div>
    );
}

export default CoinPage;