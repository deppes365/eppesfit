// React
import { useState, useEffect } from 'react';

// Styling
import './sass/Main.scss';

// React Router DOM
import { Route, Routes, useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './auth/firebase.config';

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
import Signup from './pages/Signup';
import WeighIn from './pages/WeighIn';
import History from './pages/History';
import Routines from './pages/Routines';

import PrivateRoute from './components/PrivateRoute';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const { darkTheme } = useSelector(state => state.app);

	const auth = getAuth(app);

	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
			}
		});

		if (loggedIn) {
			navigate('/')
		}
	}, [auth, loggedIn]);

	return (
		<div className={`App ${darkTheme ? 'dark' : 'light'}`}>
			<div className="main bg-primary">
				<Notification />
				{loggedIn && <Navbar />}
				{loggedIn && <Settings />}
				{loggedIn && <BottomBar />}

				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<Signup />} />

					<Route path="/" element={<PrivateRoute loggedIn={loggedIn} />}>
						<Route path="/" element={<Workout />} />
					</Route>

					<Route path="/profile" element={<PrivateRoute loggedIn={loggedIn} />}>
						<Route path="/profile" element={<Profile />} />
					</Route>

					<Route
						path="/weigh-in"
						element={<PrivateRoute loggedIn={loggedIn} />}
					>
						<Route path="/weigh-in" element={<WeighIn />} />
					</Route>

					<Route path="/history" element={<PrivateRoute loggedIn={loggedIn} />}>
						<Route path="/history" element={<History />} />
					</Route>

					<Route
						path="/routines"
						element={<PrivateRoute loggedIn={loggedIn} />}
					>
						<Route path="/routines" element={<Routines />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
