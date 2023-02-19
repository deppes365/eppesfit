import { FaTimes } from 'react-icons/fa';

import {
	resetAppState,
	setDarkTheme,
	setMeasurementSystem,
	setShowSettings,
} from '../redux/app/appSlice';
import { notify } from '../redux/notification/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../auth/firebase.config';
import { resetUserState } from '../redux/user/userSlice';

function Settings() {
	const dispatch = useDispatch();
	const auth = getAuth(app);
	const { darkTheme, imperialSystem, showSettings } = useSelector(
		state => state.app
	);

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

	const handleSignOut = async () => {
		try {
			await signOut(auth);

			dispatch(resetAppState());
			dispatch(resetUserState());
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div
			className={`settings bg-secondary rgba ${showSettings ? 'active' : ''}`}
		>
			<FaTimes
				className="icon"
				onClick={() => dispatch(setShowSettings(false))}
			/>
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
			<button
				onClick={e => {
					e.preventDefault();
					handleSignOut();
				}}
			>
				Sign out
			</button>
		</div>
	);
}

export default Settings;
