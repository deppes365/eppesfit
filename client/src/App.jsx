// React
import { useState, useEffect } from 'react';

// Styling
import './sass/Main.scss';

// React Router DOM
import { Route, Routes, useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setDarkTheme } from './redux/app/appSlice';

// Layouts
import Navbar from './layouts/Navbar';
import Settings from './layouts/Settings';

//Pages
import Login from './pages/Login.jsx';
import BottomBar from './layouts/bottomBar.jsx';
import Workout from './pages/Workout.jsx';
import Profile from './pages/Profile';

// Components
import Notification from './components/Notification';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [showSettings, setShowSettings] = useState(false);

	const { darkTheme } = useSelector(state => state.app);
	const {showNotification} = useSelector(state => state.notification)

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loggedIn) {
			navigate('/login');
		}
	}, [loggedIn, navigate]);

	return (
		<div className={`App ${darkTheme ? 'dark' : 'light'}`}>
			<div className="main bg-primary">
				<Notification />
				{loggedIn && (
					<Navbar
						showSettings={showSettings}
						setShowSettings={setShowSettings}
					/>
				)}
				{loggedIn && <BottomBar />}
				<Settings
					showSettings={showSettings}
					setShowSettings={setShowSettings}
				/>

				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Workout />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
