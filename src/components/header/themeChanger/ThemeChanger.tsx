import React from "react";
import style from './themeChanger.module.scss';
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { setIsDarkMode } from "../../../redux/reducers/currenciesSlice";

function ThemeChanger() {
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const dispatch = useAppDispatch();

    function handleThemeChange() {
        dispatch(setIsDarkMode());
    }

    return (
        <div className={style.themeChanger} onClick={() => handleThemeChange()}>
            {isDarkMode ? <BsSunFill cursor='pointer' color="white" size={'30px'} /> : <BsMoonFill cursor='pointer' size='30px' />}
        </div>
    );
}

export default ThemeChanger;