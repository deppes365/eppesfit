import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { setDarkTheme, setMeasurementSystem } from '../redux/app/appSlice';
import { useDispatch, useSelector } from 'react-redux';

function Settings({ showSettings, setShowSettings }) {
	const dispatch = useDispatch();
	const { darkTheme, imperialSystem } = useSelector(state => state.app);

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
					<label className="theme-switch" htmlFor="measurmentSystem">
						<input
							type="checkbox"
							id="measurementSystem"
							checked={imperialSystem}
							onChange={() => {
								dispatch(setMeasurementSystem());
							}}
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
