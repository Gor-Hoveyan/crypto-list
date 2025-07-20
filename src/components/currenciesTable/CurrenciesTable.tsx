import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setIsDataLoading,
  setOffset,
  fetchData,
  setData,
  setPaginationNumbers,
  setCurrentPage,
} from "../../redux/reducers/currenciesSlice";
import style from "./currenciesTable.module.scss";
import Pagination from "../pagination/Pagination";
import CurrenciesTableHead from "./currenciesTableHead/CurrenciesTableHead";
import CurrenciesTableBody from "./currenciesTableBody/CurrenciesTableBody";
import Loading from "../loading/Loading";

function CurrenciesTable() {
  const dispatch = useAppDispatch();
  let offset: number = useAppSelector((state) => state.currenciesSlice.offset);
  let currentPage: number = useAppSelector(
    (state) => state.currenciesSlice.currentPage
  );
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const isDataLoading = useAppSelector(
    (state) => state.currenciesSlice.isDataLoading
  );

  async function getData(time: string, paginationOffset?: number) {
    if (time === "back" && offset === 0) {
      return offset;
    }
    let data: any;

    dispatch(setIsDataLoading(false));

    if (paginationOffset) {
      dispatch(setCurrentPage(paginationOffset));
      dispatch(setPaginationNumbers());
      offset = Number(String(paginationOffset - 1) + "0") * 2.5;
      data = await dispatch(fetchData({ offset }));
      dispatch(setOffset(offset));
    } else {
      if (time === "back") {
        offset -= 25;
        data = await dispatch(fetchData({ offset }));
        dispatch(setCurrentPage(--currentPage));
        dispatch(setPaginationNumbers());
        dispatch(setOffset(offset));
      } else if (time === "next") {
        offset += 25;
        data = await dispatch(fetchData({ offset }));
        dispatch(setCurrentPage(++currentPage));
        dispatch(setPaginationNumbers());
        dispatch(setOffset(offset));
      } else if (time === "first") {
        offset = 0;
        data = await dispatch(fetchData({ offset }));
        dispatch(setCurrentPage(1));
        dispatch(setPaginationNumbers());
        dispatch(setOffset(offset));
      } else if (time === "") {
        data = await dispatch(fetchData({ offset }));
      }
      data = await dispatch(fetchData({ offset }));
    }

    if (data) {
      dispatch(setData(data.payload));
      dispatch(setIsDataLoading(true));
    }
  }

  useEffect(() => {
    getData("first");
    dispatch(setPaginationNumbers());
  }, []);

  return (
    <div className={style.main}>
      {isDataLoading ? (
        <>
          <table className={isDarkMode ? style.darkTable : style.lightTable}>
            <CurrenciesTableHead />
            <CurrenciesTableBody />
          </table>
          <Pagination getData={getData} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default CurrenciesTable;
