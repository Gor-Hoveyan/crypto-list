import React from "react";
import style from "./CurrenciesTableBody.module.scss";
import {
  slicePrice,
  numberWithCommas,
  slicePercent,
} from "../../../utils/functions";
import { CoinData } from "../../../utils/schema";
import { useAppSelector } from "../../../redux/hooks";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CurrenciesTableBody() {
  const isDataLoading: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDataLoading
  );
  const data: CoinData[] = useAppSelector(
    (state) => state.currenciesSlice.data
  );
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const { i18n } = useTranslation();

  return (
    <tbody className={isDarkMode ? style.darkTbody : style.lightTbody}>
      {isDataLoading ? (
        data?.map((coin, index) => {
          return (
            <tr key={index}>
              <td>{coin.rank ? coin.rank : ""}</td>
              <td className={style.tableDataName}>
                <div className={style.coinNameDiv}>
                  {isDataLoading && coin.PNGSRC ? (
                    <img
                      className={style.coinPNG}
                      src={coin.PNGSRC}
                      alt={coin.name}
                    />
                  ) : (
                    ""
                  )}
                  {coin.name ? (
                    <NavLink
                      className={style.coinLink}
                      to={`/coin/${coin.id.toLowerCase()}`}
                    >
                      {coin.name}
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              </td>
              <td>
                {coin.priceUsd
                  ? numberWithCommas(slicePrice(coin.priceUsd, i18n.language))
                  : ""}
                $
              </td>
              <td>
                {coin.marketCapUsd
                  ? slicePrice(coin.marketCapUsd, i18n.language)
                  : ""}
                $
              </td>
              <td>
                {coin.volumeUsd24Hr
                  ? slicePrice(coin.volumeUsd24Hr, i18n.language)
                  : ""}
                $
              </td>
              <td>
                {coin.supply ? numberWithCommas(coin.supply.split(".")[0]) : ""}{" "}
                {coin.symbol && coin.supply ? coin.symbol : ""}
              </td>
              <td>
                {coin.vwap24Hr
                  ? numberWithCommas(slicePrice(coin.vwap24Hr, i18n.language))
                  : ""}
                $
              </td>
              <td
                className={
                  Number(coin.changePercent24Hr) > 0
                    ? style.changePercentPositive
                    : style.changePercentNegative
                }
              >
                {Number(coin.changePercent24Hr) > 0 ? "+" : "-"}
                {coin.changePercent24Hr
                  ? slicePercent(coin.changePercent24Hr)
                  : ""}
                %
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>
            <p>Loading...</p>
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default CurrenciesTableBody;
