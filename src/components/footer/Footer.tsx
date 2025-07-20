import React from "react";
import style from "./footer.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

function Footer() {
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const { t } = useTranslation();

  return (
    <footer
      className={
        isDarkMode ? style.darkFooterContainer : style.lightFooterContainer
      }
    >
      <p className={style.footerParagraph}>{t("footer.copyright")}</p>
      <p className={style.footerParagraph}>
        {t("footer.usedAPI")} :{" "}
        <a href="https://docs.coincap.io/" target="_blank" rel="noreferrer">
          CoinCap API 3.0
        </a>
      </p>
    </footer>
  );
}

export default Footer;
