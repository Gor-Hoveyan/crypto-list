import React from "react";
import style from "./pagination.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

type GetDataType = (
  time: string,
  paginationOffset?: number
) => Promise<0 | undefined>;

interface ComponentProps {
  getData: GetDataType;
}

const CurrenciesTablePagination: React.FC<ComponentProps> = ({ getData }) => {
  const paginationNumbers: number[] = useAppSelector(
    (state) => state.currenciesSlice.paginationNumbers
  );
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const currentPage: number = useAppSelector(
    (state) => state.currenciesSlice.currentPage
  );
  const { t } = useTranslation();

  return (
    <div
      className={
        isDarkMode
          ? style.darkPaginationContainer
          : style.lightPaginationContainer
      }
    >
      <button
        className={style.paginationButton}
        onClick={() => getData("back")}
      >
        {t("pagination.back")}
      </button>
      <p onClick={() => getData("first")} className={style.pageNumber}>
        1
      </p>
      <p className={style.ellipses}> ... </p>
      {paginationNumbers
        ? paginationNumbers.map((number, index) => {
            if (currentPage === number) {
              return (
                <p
                  className={style.pageNumber}
                  key={index}
                  onClick={() => getData("paginationNumber", number)}
                >
                  <b>{number}</b>
                </p>
              );
            } else {
              return (
                <p
                  className={style.pageNumber}
                  key={index}
                  onClick={() => getData("paginationNumber", number)}
                >
                  {number}
                </p>
              );
            }
          })
        : ""}
      <button
        className={style.paginationButton}
        onClick={() => getData("next")}
      >
        {t("pagination.next")}
      </button>
    </div>
  );
};

export default CurrenciesTablePagination;
