import React, { useState } from 'react';
import LineChart from '../components/LineChart';
import WeighInModal from '../components/WeighInModal';

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
    {showModal && (<WeighInModal setShowModal={setShowModal}/>)}
			<h2 className="pageTitle">Weigh Ins</h2>
			<LineChart chartData={userData} />

			<div className="btnsContainer">
      <button onClick={(e) => {
        e.preventDefault()
        setShowModal(p => !p)
      }}>+ Add Weight</button>
      </div>
		</div>
	);
}

export default WeighIn;
