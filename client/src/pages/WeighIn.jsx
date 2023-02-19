import React, { useState } from 'react';
import LineChart from '../components/LineChart';
import WeighInModal from '../components/WeighInModal';
import WeighInComponent from '../components/WeighInComponent';

function WeighIn() {
	const [showModal, setShowModal] = useState(false);
	const [userData, setUserData] = useState({
		datasets: [
			{
				label: 'Weight',
				data: {
					Jan: 240,
					Feb: 239,
				},
			},
		],
	});

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
				{weighIns.map(weighIn => (
					<WeighInComponent weighIn={weighIn} />
				))}
			</div>
		</div>
	);
}

const weighIns = [
	{
		date: 'February 18th, 2023',
		weight: '245 lbs.',
		change: '+0.5 lbs',
	},
	{
		date: 'February 17th, 2023',
		weight: '245 lbs.',
		change: '+0.5 lbs',
	},
];

export default WeighIn;
