import React from "react";
import style from './currenciesTableHead.module.scss';
import { BsExclamationCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { avgTooltipContentEn, avgTooltipContentRu, changeTooltipContentEn, changeTooltipContentRu, circSupTooltipContentEn, markCapTooltipContentEn, markCapTooltipContentRu, nameTooltipContentEn, nameTooltipContentRu, priceTooltipContentEn, priceTooltipContentRu, rankTooltipContentEn, rankTooltipContentRu, volumeTooltipContentEn, volumeTooltipContentRu } from "../../../utils/tooltipContents";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { sortTable } from "../../../redux/reducers/currenciesSlice";

function CurrenciesTableHead() {
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const language: string = useAppSelector(state => state.currenciesSlice.language);
    const sortType: string = useAppSelector(state => state.currenciesSlice.sortType);
    const dispatch = useAppDispatch();

    function handleSortingByPrice() {
        if (sortType === 'byLowerPrice' || sortType === '') {
            dispatch(sortTable('byHigherPrice'));
        } else {
            dispatch(sortTable('byLowerPrice'));
        }
    }
    function handleSortingByRank() {
        if (sortType === 'byHigherRank' || sortType === '') {
            dispatch(sortTable('byLowerRank'));
        } else {
            dispatch(sortTable('byHigherRank'));
        }
    }
    function handleSortingByMarkCap() {
        if (sortType === 'byLowerMarkCap' || sortType === '') {
            dispatch(sortTable('byHigherMarkCap'));
        } else {
            dispatch(sortTable('byLowerMarkCap'));
        }
    }
    function handleSortingByVol() {
        if (sortType === 'byLowerVol' || sortType === '') {
            dispatch(sortTable('byHigherVol'));
        } else {
            dispatch(sortTable('byLowerVol'));
        }
    }
    function handleSortingByCircSup() {
        if (sortType === 'byHigherCircSup' || sortType === '') {
            dispatch(sortTable('byLowerCircSup'));
        } else {
            dispatch(sortTable('byHigherCircSup'));
        }
    }
    function handleSortingByAVG() {
        if (sortType === 'byHigherAVG' || sortType === '') {
            dispatch(sortTable('byLowerAVG'));
        } else {
            dispatch(sortTable('byHigherAVG'));
        }
    }
    function handleSortingByChange() {
        if (sortType === 'byHigherChange' || sortType === '') {
            dispatch(sortTable('byLowerChange'));
        } else {
            dispatch(sortTable('byHigherChange'));
        }
    }
    function handleSortingByName() {
        if (sortType === 'byHigherName' || sortType === '') {
            dispatch(sortTable('byLowerName'));
        } else {
            dispatch(sortTable('byHigherName'));
        }
    }
    return (
        <thead className={isDarkMode ? style.darkThead : style.lightThead}>
        <tr>
            <th>
                <p onClick={() => handleSortingByRank()}>{language === 'en' ? 'Rank' : 'Ранг'}</p>
                <Tooltip id='RankTooltip'/>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? rankTooltipContentEn : rankTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByName()}>{language === 'en' ? 'Name' : 'Название'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? nameTooltipContentEn : nameTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByPrice()}>{language === 'en' ? 'Price(USD)' : 'Цена(USD)'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? priceTooltipContentEn : priceTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByMarkCap()}>{language === 'en' ? 'Market Capitalization' : 'Рыночная Капитализация'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? markCapTooltipContentEn : markCapTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByVol()}>{language === 'en' ? 'Volume(24H)' : 'Объем(24Ч)'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? volumeTooltipContentEn : volumeTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByCircSup()}>{language === 'en' ? 'Circulating Supply' : 'Циркулирующее Предложение'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? circSupTooltipContentEn : changeTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByAVG()}>{language === 'en' ? 'Average Price(24H)' : 'Средняя цена(24Ч)'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? avgTooltipContentEn : avgTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
            <th>
                <p onClick={() => handleSortingByChange()}>{language === 'en' ? 'Change(24H)' : 'Изменение(24Ч)'}</p>
                <p data-tooltip-variant={isDarkMode ? 'light' : 'dark'} data-tooltip-place="bottom-start" data-tooltip-id='RankTooltip' data-tooltip-content={language === 'en' ? changeTooltipContentEn : changeTooltipContentRu} className={style.exclamationCircle}>
                    <BsExclamationCircle size='20px' color='dodgerblue' />
                </p>
            </th>
        </tr>
    </thead>
    )
}

export default CurrenciesTableHead;