import React, { useState } from 'react';
import BgVideo from '../assets/videos/eppesfit-bg-video.mp4';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formError, setFormError] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState)
    }

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

				<h3>Log in to your account!</h3>

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
                    {showPassword ? (<AiFillEyeInvisible onClick={handleShowPassword} className='icon'/>) : (<AiFillEye onClick={handleShowPassword} className='icon'/>)}
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
                    {showConfirmPassword ? (<AiFillEyeInvisible onClick={handleShowConfirmPassword} className='icon'/>) : (<AiFillEye onClick={handleShowConfirmPassword} className='icon'/>)}
				</div>

				<button>Create Account</button>
				<p>
					Already have an account? <a href="">Log in here</a>.
				</p>
				<p>Sign up with Google</p>
			</form>
		</div>
	);
}

export default Signup;
