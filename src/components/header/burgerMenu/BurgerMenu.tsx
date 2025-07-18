import React from "react";
import style from "./burgerMenu.module.scss";
import ThemeChanger from "../themeChanger/ThemeChanger";
import LanguageChanger from "../languageChanger/LanguageChanger";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MdOutlineMenu } from "react-icons/md";
import { setIsMenuOpened } from "../../../redux/reducers/currenciesSlice";

function BurgerMenu() {
  const isMenuOpened: boolean = useAppSelector(
    (state) => state.currenciesSlice.isMenuOpened
  );
  const isDarkMode: boolean = useAppSelector(
    (state) => state.currenciesSlice.isDarkMode
  );
  const dispatch = useAppDispatch();
  function handleBurgerMenu() {
    dispatch(setIsMenuOpened());
  }

  return (
    <nav
      className={isMenuOpened ? style.burgerMenuNav : style.hiddenBurgerMenuNav}
    >
      <ul className={isDarkMode ? style.darkMenuList : style.lightMenuList}>
        <li>
          <h1>Main</h1>
        </li>
        <li className={style.listThemeChanger}>
          <ThemeChanger />
        </li>
        <li>
          <LanguageChanger />
        </li>
        <li>
          <p
            className={style.burgerMenuOpener}
            onClick={() => handleBurgerMenu()}
          >
            <MdOutlineMenu size="30px" color={isDarkMode ? "white" : "black"} />
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
