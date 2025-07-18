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
import {
  slicePrice,
  slicePercent,
  numberWithCommas,
} from "../../utils/functions";
import PriceChart from "./priceChart/PriceChart";
import { fetchChartsData } from "../../redux/reducers/currentCoinSlice";
import { useTranslation } from "react-i18next";

function CoinPage() {
  const coinData: CoinData = useAppSelector(
    (state) => state.currentPageSlice.data
  );
  const dispatch = useAppDispatch();
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const { coinName } = useParams();
  const chartInterval = useAppSelector(
    (state) => state.currentPageSlice.chartInterval
  );
  const { t, i18n } = useTranslation();

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
          <div className={style.coinDataContainer}>
            <h1 className={style.coinNameHeader}>
              #{coinData?.rank} {coinData?.name}
              <img src={coinData?.PNGSRC} alt="coin" />
            </h1>

            <p>
              {t("coinPage.currentPrice")}
              {coinData &&
                numberWithCommas(slicePrice(coinData.priceUsd, i18n.language))}
              $
            </p>
            <p>
              {t("coinPage.marketCap")}{" "}
              {coinData.marketCapUsd &&
                numberWithCommas(
                  slicePrice(coinData.marketCapUsd, i18n.language)
                )}
              $
            </p>
            <p>
              {t("coinPage.vol")}{" "}
              {coinData.volumeUsd24Hr &&
                numberWithCommas(
                  slicePrice(coinData.volumeUsd24Hr, i18n.language)
                )}
              $
            </p>
            <p>
              {t("coinPage.avg")}{" "}
              {coinData.vwap24Hr &&
                numberWithCommas(slicePrice(coinData.vwap24Hr, i18n.language))}
              $
            </p>
            <p>
              {t("coinPage.circSup")}{" "}
              {coinData.supply &&
                numberWithCommas(coinData.supply.split(".")[0])}{" "}
              {coinData?.symbol}
            </p>
            <p>
              {t("coinPage.maxSup")}{" "}
              {coinData.maxSupply
                ? numberWithCommas(coinData.maxSupply.split(".")[0])
                : "---"}{" "}
              {coinData?.symbol}
            </p>
            <p>
              {t("coinPage.change")}
              <span
                className={
                  Number(coinData?.changePercent24Hr) > 0
                    ? style.changePercentPositive
                    : style.changePercentNegative
                }
              >
                {Number(coinData?.changePercent24Hr) > 0 ? "+" : "-"}
                {coinData.changePercent24Hr &&
                  slicePercent(coinData.changePercent24Hr)}
                %
              </span>
            </p>
          </div>
          <div className={style.priceChart}>
            <div className={style.chartNavDiv}>
              <h2>{t("coinPage.history")}</h2>
              <p
                id={chartInterval.m1 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("m1")}
              >
                {t("coinPage.1D")}
              </p>
              <p
                id={chartInterval.m5 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("m5")}
              >
                {t("coinPage.5D")}
              </p>
              <p
                id={chartInterval.m15 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("m15")}
              >
                {t("coinPage.7D")}
              </p>
              <p
                id={chartInterval.m30 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("m30")}
              >
                {t("coinPage.15D")}
              </p>
              <p
                id={chartInterval.h1 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("h1")}
              >
                {t("coinPage.1M")}
              </p>
              <p
                id={chartInterval.h2 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("h2")}
              >
                {t("coinPage.2M")}
              </p>
              <p
                id={chartInterval.h6 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("h6")}
              >
                {t("coinPage.6M")}
              </p>
              <p
                id={chartInterval.h12 ? `${style.activeInterval}` : ""}
                onClick={() => handleChartInterval("h12")}
              >
                {t("coinPage.1Y")}
              </p>
            </div>
            <PriceChart />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default CoinPage;
