import React, { useState } from 'react';
import BgVideo from '../assets/videos/eppesfit-bg-video.mp4';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GoogleLogo from '../assets/images/logos/google-logo.png';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../auth/firebase.config.js';
import { useDispatch } from 'react-redux';
import { notify } from '../redux/notification/notificationSlice.js';


function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formError, setFormError] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const dispatch = useDispatch();
	const auth = getAuth(app);

	const handleChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	const handleShowConfirmPassword = () => {
		setShowConfirmPassword(prevState => !prevState);
	};

	const handleSignUp = async () => {
		if (formData.password !== formData.confirmPassword) {
			dispatch(
				notify({
					message: 'Passwords do not match.',
					error: true,
				})
			);

			setFormData(prevState => ({
				...prevState,
				password: '',
				confirmPassword: '',
			}));

			setFormError(true);
			return;
		}
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				formData.email,
				formData.password
			);
			
			dispatch(
				notify({
					message: 'Your account has been created!',
					error: false,
				})
			);

			console.log(user.user);
		} catch (error) {
			console.log(error.message);

			if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
				dispatch(
					notify({
						message: 'An account already exists with this email.',
						error: true,
					})
				);
			}
			setFormData(prevState => ({
				...prevState,
				password: '',
				confirmPassword: '',
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

				<h3>Let's create your account!</h3>

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

				<div
					className={`inputGroup ${
						formData.confirmPassword.length ? 'active' : ''
					} ${formError ? 'error' : ''}`}
				>
					<label htmlFor="password">Confrim Password</label>
					<input
						type={showConfirmPassword ? 'text' : 'password'}
						name="confirmPassword"
						id="confirmPassword"
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						onClick={() => formError && setFormError(false)}
					/>
					{showConfirmPassword ? (
						<AiFillEyeInvisible
							onClick={handleShowConfirmPassword}
							className="icon"
						/>
					) : (
						<AiFillEye onClick={handleShowConfirmPassword} className="icon" />
					)}
				</div>

				<button
					onClick={e => {
						e.preventDefault();
						handleSignUp();
					}}
				>
					Create Account
				</button>
				<p>
					Already have an account? <Link to="/login">Log in here</Link>.
				</p>
				<div className="google">
					<p>Sign up with Google</p>
					<div className="imgContainer">
						<img src={GoogleLogo} alt="Google Logo" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Signup;
