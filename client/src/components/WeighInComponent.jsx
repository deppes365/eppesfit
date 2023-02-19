import React, { useState } from 'react';
import { FaEdit, FaCheck, FaEllipsisV } from 'react-icons/fa';

function WeighInComponent({ weighIn }) {
	const [showOptions, setShowOptions] = useState();
	const [showDelete, setShowDelete] = useState();

	return (
		<div className="weighIn" onClick={() => {
			showOptions && setShowOptions(false)
		}}>
			<FaEllipsisV
				className="editIcon text-color"
				onClick={() => {
					setShowOptions(prevState => !prevState);
				}}
			/>
			{showOptions && (
				<div className="controls bg-secondary rgba">
					<p className="option">Edit</p>
					<p
						className="option"
						onClick={() => {
							setShowDelete(true);
							setShowOptions(false);
						}}
					>
						Delete
					</p>
				</div>
			)}
			<p className="date">{weighIn.date}</p>
			<h2>{weighIn.weight}</h2>
			<div className="change">
				<p>{weighIn.change}</p>
			</div>

			{showDelete && (
				<div className="deleteModal bg-secondary rgba">
					<p>Are you sure you want to delete this weigh in?</p>
					<div className="btnsContainer">
						<button>Delete</button>
						<button
							className="btn-red"
							onClick={() => {
								setShowDelete(false);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default WeighInComponent;
