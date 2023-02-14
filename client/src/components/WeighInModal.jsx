import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {useSelector} from 'react-redux';

const WeighInModal = ({ setShowModal }) => {
  const {imperialSystem} = useSelector(state => state.app)

	return (
		<div className="weighInModal bg-primary rgba">
			<FaTimes className="icon" onClick={() => setShowModal(p => !p)} />

			<form className="bg-primary">
				<h3 className="pageTitle">Add Today's Weight</h3>
				<div className="inputGroup">
					<input type="number" name="weight" id="weight" required min={0} max={500}/>
          {imperialSystem ? (<p>Lbs</p>) : (<p>Kg</p>)}
				</div>
			</form>
		</div>
	);
};

export default WeighInModal;
