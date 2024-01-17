import React from "react";
import style from './languageChanger.module.scss';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeLanguage } from "../../../redux/reducers/currenciesSlice";

function LanguageChanger() {
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const dispatch = useAppDispatch();

    function handleLanguageChange(lang: string) {
        dispatch(changeLanguage(lang));
    }

    return (
        <select onChange={(event) => handleLanguageChange(event.target.value)} className={isDarkMode ? style.darkLanguageChanger : style.lightLanguageChanger}>
            <option value='en'>English</option>
            <option value='ru'>Русский</option>
        </select>
    );
}

export default LanguageChanger;