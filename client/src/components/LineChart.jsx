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
                <option value="monthly"><p>Monthly</p></option>
                <option value="weekly"><p>Weekly</p></option>
                <option value="thisWeek" selected><p>This Week</p></option>
            </select>
		</div>
	);
};

export default LineChart;
