import React from "react";
import style from "./CoinDataContainer.module.scss";
import {
  numberWithCommas,
  slicePercent,
  slicePrice,
} from "../../../utils/functions";
import { CoinData } from "../../../utils/schema";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/hooks";

export default function CoinDataContainer({
  coinData,
}: {
  coinData: CoinData;
}) {
  const { t, i18n } = useTranslation();
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );

  return (
    <div
      className={`${style.coinDataContainer} ${
        isDarkMode ? style.darkContainer : style.lightContainer
      }`}
    >
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
          numberWithCommas(slicePrice(coinData.marketCapUsd, i18n.language))}
        $
      </p>
      <p>
        {t("coinPage.vol")}{" "}
        {coinData.volumeUsd24Hr &&
          numberWithCommas(slicePrice(coinData.volumeUsd24Hr, i18n.language))}
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
        {coinData.supply && numberWithCommas(coinData.supply.split(".")[0])}{" "}
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
  );
}
