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
import Login from './pages/Login';
import BottomBar from './layouts/bottomBar';
import Workout from './pages/Workout';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [showSettings, setShowSettings] = useState(false);

	const { darkTheme } = useSelector(state => state.app);

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
				{loggedIn && <Navbar showSettings={showSettings} setShowSettings={setShowSettings} />}
				{loggedIn && <BottomBar />}
				<Settings
					showSettings={showSettings}
					setShowSettings={setShowSettings}
				/>

				<Routes>
					<Route path="/login" element={<Login />} />
          <Route path='/' element={<Workout />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
