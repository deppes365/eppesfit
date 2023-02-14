import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, SubTitle, Title} from 'chart.js/auto';
import { useSelector } from 'react-redux';

const LineChart = ({ chartData }) => {
	const { darkTheme } = useSelector(state => state.app);

	const options = {
		backgroundColor: '#fff',
		borderColor: '#0ADC99',
		color: `${darkTheme ? '#f7f7f7' : '#272727'}`,
	};

   

	return (
		<div className="chartContainer">
			<Line data={chartData} options={options}/>
            <select name="chartFilter" id="chartFilter">
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="thisWeek" defaultValue={true}>This Week</option>
            </select>
		</div>
	);
};

export default LineChart;
