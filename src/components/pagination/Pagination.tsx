import React from "react";
import style from "./pagination.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
        <MdArrowBackIos size={16} />
      </button>
      <p onClick={() => getData("first")} className={style.pageNumber}>
        1
      </p>
      {currentPage > 4 ? <p className={style.ellipses}> - </p> : <></>}
      {paginationNumbers
        ? paginationNumbers.map((number, index) => {
            if (currentPage === number) {
              return (
                <p
                  className={style.pageNumber}
                  key={index}
                  onClick={() => getData("paginationNumber", number)}
                >
                  <span className={style.active}>{number}</span>
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
        <MdArrowForwardIos size={16} />
      </button>
    </div>
  );
};

export default CurrenciesTablePagination;
