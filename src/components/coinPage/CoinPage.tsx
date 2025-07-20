import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import {
  fetchCoinData,
  setChartsData,
  setCurrentCoinData,
  setChartInterval,
} from "../../redux/reducers/currentCoinSlice";
import style from "./coinPage.module.scss";
import { ChartInterval, CoinData } from "../../utils/schema";
import PriceChart from "./priceChart/PriceChart";
import { fetchChartsData } from "../../redux/reducers/currentCoinSlice";
import Loading from "../loading/Loading";
import CoinDataContainer from "./coinDataContainer/CoinDataContainer";
import ChartNav from "./chartNav/ChartNav";

function CoinPage() {
  const coinData: CoinData = useAppSelector(
    (state) => state.currentPageSlice.data
  );
  const dispatch = useAppDispatch();
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const { coinName } = useParams();

  async function handleChartInterval(interval: ChartInterval): Promise<any> {
    const data: any = await dispatch(
      fetchChartsData({ coinName: String(coinName), interval: interval })
    );
    dispatch(setChartsData(data.payload));
    dispatch(setChartInterval(interval));
  }
  async function getCoinData(coinName: string) {
    const fetchedData: any = await dispatch(fetchCoinData({ coinName }));
    dispatch(setCurrentCoinData(fetchedData.payload));
  }

  useEffect(() => {
    getCoinData(String(coinName));
    if (coinData) {
      handleChartInterval("h12");
    }
  }, []);

  return (
    <>
      {coinData ? (
        <div
          className={
            isDarkMode
              ? style.darkCoinPageContainer
              : style.lightCoinPageContainer
          }
        >
          <CoinDataContainer coinData={coinData} />
          <div className={style.priceChart}>
            {coinName ? <ChartNav coinName={coinName} /> : <></>}
            <div className={style.chartDiv}>
              <PriceChart />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CoinPage;
