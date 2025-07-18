import React from "react";
import style from "./currenciesTableHead.module.scss";
import { BsExclamationCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { sortTable } from "../../../redux/reducers/currenciesSlice";
import { useTranslation } from "react-i18next";

function CurrenciesTableHead() {
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const sortType: string = useAppSelector(
    (state) => state.currenciesSlice.sortType
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function handleSortingByPrice() {
    if (sortType === "byLowerPrice" || sortType === "") {
      dispatch(sortTable("byHigherPrice"));
    } else {
      dispatch(sortTable("byLowerPrice"));
    }
  }
  function handleSortingByRank() {
    if (sortType === "byHigherRank" || sortType === "") {
      dispatch(sortTable("byLowerRank"));
    } else {
      dispatch(sortTable("byHigherRank"));
    }
  }
  function handleSortingByMarkCap() {
    if (sortType === "byLowerMarkCap" || sortType === "") {
      dispatch(sortTable("byHigherMarkCap"));
    } else {
      dispatch(sortTable("byLowerMarkCap"));
    }
  }
  function handleSortingByVol() {
    if (sortType === "byLowerVol" || sortType === "") {
      dispatch(sortTable("byHigherVol"));
    } else {
      dispatch(sortTable("byLowerVol"));
    }
  }
  function handleSortingByCircSup() {
    if (sortType === "byHigherCircSup" || sortType === "") {
      dispatch(sortTable("byLowerCircSup"));
    } else {
      dispatch(sortTable("byHigherCircSup"));
    }
  }
  function handleSortingByAVG() {
    if (sortType === "byHigherAVG" || sortType === "") {
      dispatch(sortTable("byLowerAVG"));
    } else {
      dispatch(sortTable("byHigherAVG"));
    }
  }
  function handleSortingByChange() {
    if (sortType === "byHigherChange" || sortType === "") {
      dispatch(sortTable("byLowerChange"));
    } else {
      dispatch(sortTable("byHigherChange"));
    }
  }
  function handleSortingByName() {
    if (sortType === "byHigherName" || sortType === "") {
      dispatch(sortTable("byLowerName"));
    } else {
      dispatch(sortTable("byHigherName"));
    }
  }
  return (
    <thead className={isDarkMode ? style.darkThead : style.lightThead}>
      <tr>
        <th>
          <p onClick={() => handleSortingByRank()}>
            {t("currenciesTableHead.rank")}
          </p>
          <Tooltip id="RankTooltip" />
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.rankTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByName()}>
            {t("currenciesTableHead.name")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.nameTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByPrice()}>
            {t("currenciesTableHead.price")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.priceTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByMarkCap()}>
            {t("currenciesTableHead.markCap")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t(
              "currenciesTableHead.markCapTooltipContent"
            )}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByVol()}>
            {t("currenciesTableHead.vol")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.volTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByCircSup()}>
            {t("currenciesTableHead.circSup")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t(
              "currenciesTableHead.circSupTooltipContent"
            )}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByAVG()}>
            {t("currenciesTableHead.avg")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.avgTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
        <th>
          <p onClick={() => handleSortingByChange()}>
            {t("currenciesTableHead.change")}
          </p>
          <p
            data-tooltip-variant={isDarkMode ? "light" : "dark"}
            data-tooltip-place="bottom-start"
            data-tooltip-id="RankTooltip"
            data-tooltip-content={t("currenciesTableHead.changeTooltipContent")}
            className={style.exclamationCircle}
          >
            <BsExclamationCircle size="20px" color="dodgerblue" />
          </p>
        </th>
      </tr>
    </thead>
  );
}

export default CurrenciesTableHead;
