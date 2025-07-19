import React, { useState } from "react";
import style from "./languageChanger.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import i18n from "../../../i18n";
import USFlag from "../../../icons/USFlag";
import RuFlag from "../../../icons/RuFlag";
import { RiArrowDownSFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function LanguageChanger() {
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );

  const [isActive, setIsActive] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div
      className={
        isDarkMode ? style.darkChangerContainer : style.lightChangerContainer
      }
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={style.content}>
        {t(`languageChanger.${i18n.language}`)} <RiArrowDownSFill />
      </div>
      <div
        className={
          isDarkMode ? style.darkLanguageChanger : style.lightLanguageChanger
        }
        defaultValue={i18n.language}
      ></div>
      {isActive ? (
        <div className={isDarkMode ? style.darkSelect : style.lightSelect}>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={style.option}
          >
            <USFlag /> {t("languageChanger.en")}
          </button>
          <button
            onClick={() => i18n.changeLanguage("ru")}
            className={style.option}
          >
            <RuFlag /> {t("languageChanger.ru")}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LanguageChanger;
