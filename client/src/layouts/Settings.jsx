import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import { setDarkTheme, setMeasurementSystem } from '../redux/app/appSlice';
import { notify } from '../redux/notification/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';

function Settings({ showSettings, setShowSettings }) {
	const dispatch = useDispatch();
	const { darkTheme, imperialSystem } = useSelector(state => state.app);

	const handleMeasurementSystem = () => {
		dispatch(
			notify({
				message: `Measurement system changed to ${
					!imperialSystem ? 'Imperial' : 'Metric'
				} system.`,
				error: false,
			})
		);

		dispatch(setMeasurementSystem());
	};

	return (
		<div
			className={`settings bg-secondary rgba ${showSettings ? 'active' : ''}`}
		>
			<FaTimes className="icon" onClick={() => setShowSettings(false)} />
			<h2>Settings</h2>
			<div className="settingsContainer">
				<h3>Dark Mode</h3>

				<div className="theme-switch-wrapper">
					<label className="theme-switch" htmlFor="darkTheme">
						<input
							type="checkbox"
							id="darkTheme"
							checked={darkTheme}
							onChange={() => {
								dispatch(setDarkTheme());
							}}
						/>
						<div className="slider round"></div>
					</label>
				</div>
			</div>

			<div className="settingsContainer">
				<h3>Measurement System</h3>

				<div className="theme-switch-wrapper">
					<label className="theme-switch" htmlFor="measurementSystem">
						<input
							type="checkbox"
							id="measurementSystem"
							checked={imperialSystem}
							onChange={() => handleMeasurementSystem()}
						/>
						<div className="slider round"></div>
					</label>
				</div>
			</div>

			<div className="settingsContainer"></div>
		</div>
	);
}

export default Settings;
