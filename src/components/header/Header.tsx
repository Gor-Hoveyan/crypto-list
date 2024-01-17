import React from "react";
import style from './header.module.scss';
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import LanguageChanger from "./languageChanger/LanguageChanger";
import { updateData } from "../currenciesTable/CurrenciesTable";
import ThemeChanger from "./themeChanger/ThemeChanger";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { MdOutlineMenu } from "react-icons/md";
import { setIsMenuOpened } from "../../redux/reducers/currenciesSlice";

function Header() {
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const dispatch = useAppDispatch();
    const isMenuOpened: boolean = useAppSelector(state => state.currenciesSlice.isMenuOpened);

    function handleBurgerMenu() {
        dispatch(setIsMenuOpened());
    }

    return (
        <>
            <header className={isDarkMode ? style.darkHeaderContainer : style.lightHeaderContainer}>
                <a href='#' className={style.headerName}>Currency List</a>
                <button className={style.updateBtn} onClick={() => updateData()}>Update</button>
                <LanguageChanger />
                <ThemeChanger />
                <div className={style.menuOpener}>
                    <BurgerMenu />
                    <p className={isMenuOpened ? style.hiddenBurger : style.burger}>
                        <MdOutlineMenu size='30px' color={isDarkMode ? 'white' : 'black'} onClick={() => handleBurgerMenu()}/>
                    </p>  
                </div>
            </header>
            <div className={style.marginCleaner}></div>
            
        </>
    );
}

export default Header;