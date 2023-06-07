// React
import * as React from 'react';
import 'chart.js';
import { Line } from 'react-chartjs-2';

// Styles
import * as S from './Charts.styles';

// Models
import { LineChartProps } from 'models';

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const ActivesChart = ({ data, labels }: LineChartProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Dados',
                data,
                fill: false,
                borderColor: '#0F60FF',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <S.Component>
            <Line data={chartData} options={options} />
        </S.Component>
    );
}

export default ActivesChart;
