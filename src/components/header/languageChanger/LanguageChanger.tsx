import React from "react";
import style from "./languageChanger.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import i18n from "../../../i18n";

function LanguageChanger() {
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );

  return (
    <select
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      className={
        isDarkMode ? style.darkLanguageChanger : style.lightLanguageChanger
      }
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}

export default LanguageChanger;
