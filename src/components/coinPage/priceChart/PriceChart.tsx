import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js'
import { useAppSelector } from "../../../redux/hooks";
import { ChartData } from "../../../utils/schema";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)


function PriceChart() {
    const chartsData: ChartData[] = useAppSelector(state => state.currentPageSlice.chartsData);
    const language: string = useAppSelector(state => state.currenciesSlice.language);
    let label: string;

    if(language === 'en') {
        label = 'Price(USD';
    } else {
        label = 'Цена(USD)';
    }
    
    return (
        <div style={{ 'width': '100%', 'height': '100%'}}>
            { chartsData &&
                <Line data={{
                    labels: chartsData.map(chartData => chartData.date.slice(0, 10) + ' ' + chartData.date.slice(11, 19)),
                    datasets: [{
                        label: label,
                        data: chartsData.map(chartData => Number(chartData.priceUsd.split('.')[0])),
                        borderWidth: 1,
                        borderColor: '#3C7FF9',
                    }]
                }} options={{responsive: true}}/>
            }
        </div>
    )
}

export default PriceChart;