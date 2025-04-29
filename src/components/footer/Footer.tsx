import React from "react";
import style from './footer.module.scss';
import { useAppSelector } from "../../redux/hooks";

function Footer() {
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const language: string = useAppSelector(state => state.currenciesSlice.language);

    return (
        <footer className={isDarkMode ? style.darkFooterContainer : style.lightFooterContainer}>
            <p className={style.footerParagraph}>{language === 'en' ? '2025 © Currency List | All rights reserved' : '2024 © Currency List | Все права защищены'}</p>
            <p className={style.footerParagraph}>{language === 'en' ? 'Used API' : 'Используемый API'} : <a href="https://docs.coincap.io/" target="_blank" rel="noreferrer">CoinCap API 2.0</a></p>
        </footer>
    );
}

export default Footer;