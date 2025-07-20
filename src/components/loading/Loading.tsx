import React from "react";
import style from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={style.main}>
      <div className={style.spinner}></div>
    </div>
  );
}
