import React from "react";
import style from "./ChartNav.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useTranslation } from "react-i18next";
import { ChartInterval } from "../../../utils/schema";
import {
  fetchChartsData,
  setChartInterval,
  setChartsData,
} from "../../../redux/reducers/currentCoinSlice";

export default function ChartNav({ coinName }: { coinName: string }) {
  const chartInterval = useAppSelector(
    (state) => state.currentPageSlice.chartInterval
  );
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );

  async function handleChartInterval(interval: ChartInterval): Promise<any> {
    const data: any = await dispatch(
      fetchChartsData({ coinName: String(coinName), interval: interval })
    );
    dispatch(setChartsData(data.payload));
    dispatch(setChartInterval(interval));
  }
  return (
    <div
      className={` ${isDarkMode ? style.darkChartNav : style.lightChartNav}`}
    >
      <h1 className={style.header}>{t("coinPage.history")}</h1>
      <div
        className={`${style.chartNavDiv} ${
          isDarkMode ? style.darkChartNav : style.lightChartNav
        }`}
      >
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
    </div>
  );
}
