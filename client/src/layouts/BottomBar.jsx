import { NavLink } from 'react-router-dom';

import {
	FaWeight,
	FaUserAlt,
	FaDumbbell,
	FaClipboardList,
} from 'react-icons/fa';
import { RxCounterClockwiseClock } from 'react-icons/rx';

function BottomBar() {
	return (
		<div className="bottomBar bg-primary">
			<NavLink to="/weigh-in" className={({ isActive }) => (isActive ? 'active neuromorphism-100' : '')}>
				<FaWeight className="icon" />
			</NavLink>

			<NavLink to="/history"
				className={({ isActive }) => (isActive ? 'active neuromorphism-100' : '')}>
				<RxCounterClockwiseClock className="icon" />
			</NavLink>

			<NavLink to="/" className={({ isActive }) => (isActive ? 'active neuromorphism-100' : '')}>
				<FaDumbbell className="icon" />
			</NavLink>

			<NavLink to="/routines" className={({ isActive }) => (isActive ? 'active neuromorphism-100' : '')}>
				<FaClipboardList className="icon" />
			</NavLink>

			<NavLink to="/profile" className={({ isActive }) => (isActive ? 'active neuromorphism-100' : '')}>
				<FaUserAlt className="icon" />
			</NavLink>
		</div>
	);
}

export default BottomBar;
