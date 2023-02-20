import React, { useState } from 'react';
import LineChart from '../components/LineChart';
import WeighInModal from '../components/WeighInModal';
import WeighInComponent from '../components/WeighInComponent';

function WeighIn() {
	const [showModal, setShowModal] = useState(false);

	const chartData = weightInsReversed.slice(0, 7).reverse()

	const [userData, setUserData] = useState({
		labels: chartData.map(weighIn => weighIn.date),
		datasets: [
			{
				label: 'Weight',
				data: chartData.map(weighIn => weighIn.weight),
			},
		],
	});

	console.log(
		weighIns.map(weighIn => {
			weighIn.weight;
		})
	);

	return (
		<div className="page bg-secondary" id="weighIn">
			{showModal && <WeighInModal setShowModal={setShowModal} />}
			<h2 className="pageTitle">Weigh Ins</h2>
			<LineChart chartData={userData} />

			<div className="btnsContainer">
				<button
					onClick={e => {
						e.preventDefault();
						setShowModal(p => !p);
					}}
				>
					+ Add Weight
				</button>
			</div>

			<div className="weighInsContainer">
				{weightInsReversed.map(weighIn => (
					<WeighInComponent weighIn={weighIn} />
				))}
			</div>
		</div>
	);
}

const weighIns = [
	{
		date: 'Feb 17',
		weight: 245.9,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 18',
		weight: 245.5,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 19',
		weight: 245,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 20',
		weight: 244.7,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 21',
		weight: 244.8,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 22',
		weight: 244.2,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 23',
		weight: 243.9,
		change: '+0.5 lbs',
	},
	{
		date: 'Feb 24',
		weight: 243.5,
		change: '+0.5 lbs',
	},
];

const weightInsReversed = weighIns.reverse()

export default WeighIn;
