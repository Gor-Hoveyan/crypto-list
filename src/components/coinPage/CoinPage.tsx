import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { fetchCoinData, setChartsData, setCurrentCoinData, setChartInterval } from "../../redux/reducers/currentCoinSlice";
import style from './coinPage.module.scss';
import { ChartInterval, CoinData } from "../../utils/schema";
import { slicePrice, slicePercent, numberWithCommas } from "../../utils/functions";
import PriceChart from "./priceChart/PriceChart";
import { fetchChartsData } from "../../redux/reducers/currentCoinSlice";

function CoinPage() {
    const coinData: CoinData = useAppSelector(state => state.currentPageSlice.data);
    const dispatch = useAppDispatch();
    const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
    const language: string = useAppSelector(state => state.currenciesSlice.language);
    const { coinName } = useParams();
    const chartInterval = useAppSelector(state => state.currentPageSlice.chartInterval);

    async function handleChartInterval(interval: ChartInterval): Promise<any> {
        const data: any = await dispatch(fetchChartsData({ coinName: String(coinName), interval: interval }));
        dispatch(setChartsData(data.payload));
        dispatch(setChartInterval(interval));
    }
    async function getCoinData(coinName: string) {
        const fetchedData: any = await dispatch(fetchCoinData({ coinName }));
        dispatch(setCurrentCoinData(fetchedData.payload));
    }

    useEffect(() => {
        getCoinData(String(coinName));
        if (coinData) {
            handleChartInterval('h12');
        }
    }, [])

    return (
        <>
            {coinData ?
                <div className={isDarkMode ? style.darkCoinPageContainer : style.lightCoinPageContainer}>

                    <div className={style.coinDataContainer}>
                        <h1 className={style.coinNameHeader}>#{coinData?.rank} {coinData?.name}<img src={coinData?.PNGSRC} /></h1>

                        <p>
                            {language === 'en' ? 'Current Price: ' : 'Текущая стоимость: '} {coinData && numberWithCommas(slicePrice(coinData.priceUsd, language))}$
                        </p>
                        <p>
                            {language === 'en' ? 'Market capitalization: ' : 'Рыночная капитализация: '} {coinData.marketCapUsd && numberWithCommas(slicePrice(coinData.marketCapUsd, language))}$
                        </p>
                        <p>
                            {language === 'en' ? 'Volume(24H): ' : 'Объем(24ч): '} {coinData.volumeUsd24Hr && numberWithCommas(slicePrice(coinData.volumeUsd24Hr, language))}$
                        </p>
                        <p>
                            {language === 'en' ? 'Average Price(24H): ' : 'Средняя цена(24ч): '} {coinData.vwap24Hr && numberWithCommas(slicePrice(coinData.vwap24Hr, language))}$
                        </p>
                        <p>
                            {language === 'en' ? 'Circulating Supply: ' : 'Циркулирующее Предложение: '} {coinData.supply && numberWithCommas((coinData.supply.split('.')[0]))} {coinData?.symbol}
                        </p>
                        <p>
                            {language === 'en' ? 'Maximum Supply: ' : 'Максимальное Предложение: '} {coinData.maxSupply ? numberWithCommas((coinData.maxSupply.split('.')[0])) : '---'} {coinData?.symbol}
                        </p>
                        <p>
                            {language === 'en' ? 'Change(24H): ' : 'Изменение(24ч): '}
                            <span className={Number(coinData?.changePercent24Hr) > 0 ? style.changePercentPositive : style.changePercentNegative}>{Number(coinData?.changePercent24Hr) > 0 ? '+' : '-'}{coinData.changePercent24Hr && slicePercent(coinData.changePercent24Hr)}%</span>
                        </p>
                    </div>
                    <div className={style.priceChart}>
                        <h2>{language === 'en' ? 'Coin\'s price change history' : 'История изменения цены'}</h2>
                        <div className={style.chartNavDiv}>
                            <p id={chartInterval.m1 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('m1')}>
                                {language === 'en' ? '1D' : '1Д'}
                            </p>
                            <p id={chartInterval.m5 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('m5')}>
                                {language === 'en' ? '5D' : '5Д'}
                            </p>
                            <p id={chartInterval.m15 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('m15')}>
                                {language === 'en' ? '7D' : '7Д'}
                            </p>
                            <p id={chartInterval.m30 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('m30')}>
                                {language === 'en' ? '15D' : '15Д'}
                            </p>
                            <p id={chartInterval.h1 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('h1')}>
                                {language === 'en' ? '1M' : '1М'}
                            </p>
                            <p id={chartInterval.h2 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('h2')}>
                                {language === 'en' ? '2M' : '2М'}
                            </p>
                            <p id={chartInterval.h6 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('h6')}>
                                {language === 'en' ? '6M' : '6М'}
                            </p>
                            <p id={chartInterval.h12 ? `${style.activeInterval}` : ''} onClick={() => handleChartInterval('h12')}>
                                {language === 'en' ? '1Y' : '1Г'}
                            </p>
                        </div>
                        <div className={style.priceChartContainer}>
                        <PriceChart /></div>
                    </div>

                </div> : 'Loading...'}</>
    );
}

export default CoinPage;