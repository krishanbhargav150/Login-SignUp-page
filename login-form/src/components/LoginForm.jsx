import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from './Input';
import ErrorMessage from './ErrorMessages';
import Button from './Button';

function LoginForm({
    email,
    password,
    onEmailChange,
    onPasswordChange,
    errors,
    isFormValid,
    showPassword,
    onSetShowPassword,
    onSwitchToSignup,
    onLoginUser
}) {
    return (
        <div className='form'>

                    <h2>Login Form</h2>
                    <Input
                        type='email'
                        placeholder='abc@gmail.com'
                        value={email}
                        onChange={onEmailChange}
                    />

                    { errors.email && <ErrorMessage message={errors.email} /> }

                    <div className='password-container'>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        value={password}
                        onChange={onPasswordChange}
                    />

                    <span className="toggle-password" onClick={onSetShowPassword}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    </div>

                    { errors.password && <ErrorMessage message={errors.password} /> }

                    <a href='#' onClick={onSwitchToSignup}>
                        Forgot Password?
                    </a>

                    <Button disabled={!isFormValid} onClick={onLoginUser}>
                        Login
                    </Button>

                    <p>Not a member? <button type="button" className="link-button" onClick={onSwitchToSignup}>Sign up now</button></p>
                    </div>
    )
}

export default LoginForm;