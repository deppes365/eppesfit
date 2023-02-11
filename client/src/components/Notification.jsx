import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetNotification } from '../redux/notification/notificationSlice';

const Notification = () => {
	const { message, error, showNotification } = useSelector(
		state => state.notification
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (showNotification) {
			setTimeout(() => {
				dispatch(resetNotification());
			}, 2500);
		}
	}, [showNotification]);

	return (
		<div
			className={`notification bg-secondary ${showNotification ? 'show' : ''}`}
		>
			<h4>{message}</h4>
			<div
				className={`progressBar ${showNotification ? 'fill' : ''} ${
					error ? 'error' : 'success'
				}`}
			></div>
		</div>
	);
};

export default Notification;
