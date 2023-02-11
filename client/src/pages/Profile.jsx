import React, { useState } from 'react';
import UserImg from '../assets/images/default-user.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { notify } from '../redux/notification/notificationSlice';

function Profile() {
	const { firstName, lastName } = useSelector(state => state.user);

	const [editInfo, setEditInfo] = useState(false);

	const [userInfo, setUserInfo] = useState({
		firstName: firstName || '',
		lastName: lastName || '',
	});

	const handleChange = e => {
		setUserInfo({
			...prevState,
			[e.taget.name]: e.target.value,
		});
	};

    const dispatch = useDispatch()

	return (
		<div className="page bg-secondary" id="profile">
			<h2 className="pageTitle">Profile</h2>

			<div className="profileImg">
				<img src={UserImg} alt="user profile image" />
			</div>

			<form>
				{editInfo ? (
					<button
						className="editBtn save"
						onClick={e => {
							e.preventDefault();
							setEditInfo(false);
                            dispatch(notify({
                                message: 'User info saved!', 
                                error: false
                            }))
						}}
					>
						<p>Save</p>
					</button>
				) : (
					<button
						className="editBtn"
						onClick={e => {
							e.preventDefault();
							setEditInfo(true);
						}}
					>
						<p>Edit</p>
					</button>
				)}
				<div className="profileInfoContainer">
					<input
						type="text"
						name="firstName"
						id="firstName"
						value={userInfo.firstName}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="lastName"
						id="lastName"
						value={userInfo.lastName}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default Profile;
