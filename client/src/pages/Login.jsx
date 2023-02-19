import React, { useEffect, useState } from 'react';
import BgVideo from '../assets/videos/eppesfit-bg-video.mp4';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/images/logos/google-logo.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../auth/firebase.config';
import { useDispatch } from 'react-redux';
import { notify } from '../redux/notification/notificationSlice';
import { setUser } from '../redux/user/userSlice';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = getAuth(app);

	const [showPassword, setShowPassword] = useState(false);

	const [formError, setFormError] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleShowPassword = e => {
		setShowPassword(prevState => !prevState);
	};

	const handleLogin = async () => {
		try {
			const { user } = await signInWithEmailAndPassword(
				auth,
				formData.email,
				formData.password
			);

			if (user) {
				const { email, uid } = user;

				dispatch(
					setUser({
						email,
						uid,
					})
				);

			}

		} catch (error) {
			console.log(error.message);

			setFormError(true);

			dispatch(
				notify({
					message: 'Please check login credentials.',
					error: true,
				})
			);
			
			setFormData(prevState => ({
				...prevState,
				password: '',
			}));
		}
	};

	return (
		<div className="authPage">
			<video src={BgVideo} autoPlay loop muted></video>
			<div className="overlay"></div>

			<form className="bg-secondary rgba">
				<h1>
					Eppes
					<span>
						<em>Fit</em>
					</span>
				</h1>

				<h3>Log into your account!</h3>

				<div
					className={`inputGroup ${formData.email.length ? 'active' : ''} ${
						formError ? 'error' : ''
					}`}
				>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						required
						value={formData.email}
						onChange={handleChange}
						onClick={() => formError && setFormError(false)}
					/>
				</div>

				<div
					className={`inputGroup ${formData.password.length ? 'active' : ''} ${
						formError ? 'error' : ''
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type={showPassword ? 'text' : 'password'}
						name="password"
						id="password"
						required
						value={formData.password}
						onChange={handleChange}
						onClick={() => formError && setFormError(false)}
					/>
					{showPassword ? (
						<AiFillEyeInvisible onClick={handleShowPassword} className="icon" />
					) : (
						<AiFillEye onClick={handleShowPassword} className="icon" />
					)}
				</div>

				<button
					onClick={e => {
						e.preventDefault();
						handleLogin();
					}}
				>
					Log In
				</button>
				<p>
					Don't have an account? <Link to="/sign-up">Create one here</Link>.
				</p>
				<div className="google">
					<p>Sign in with Google</p>
					<div className="imgContainer">
						<img src={GoogleLogo} alt="Google Logo" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
