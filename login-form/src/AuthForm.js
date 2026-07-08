import { useRef, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import useLogin from './hooks/useLogin';
import useDisableSignUpButton from './hooks/useDisable';
import { signUp } from './services/signUpService';
import { loginUser } from './services/loginService';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        showPassword, 
        setShowPassword, 
        isFormValid, 
        errors, 
        submitLogin, 
        confirmPassword, 
        setConfirmPassword
    } = useLogin();

    const isSignUpDisabled = useDisableSignUpButton(email, password, confirmPassword);
    const refObject = useRef(0);
    let valueWithoutRef = 0;

    const submitSignup = async () => {
    try {
        const response = await signUp(email, password);

        console.log("Signup Success:", response);

    } catch (error) {
        console.error(error.message);
    }
}

    const submitUserLogin = async () => {
        try {
            // usecase of useRef to maintain a mutable value that persists across renders
            console.log("checking useRef", refObject.current++);
            console.log("checking value without ref", valueWithoutRef++);

            await loginUser(email, password);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    

  return (
    <div className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className= {isLogin ? 'active' : ''} onClick={() => setIsLogin(true)} >Login</button>
                <button className= {!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
            {
                isLogin ? <> 
                    <LoginForm
                        email={email}
                        password={password}
                        onEmailChange={(e) => setEmail(e.target.value)}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        errors={errors}
                        isFormValid={isFormValid}
                        showPassword={showPassword}
                        onSetShowPassword={() => setShowPassword(!showPassword)}
                        onSwitchToSignup={() => setIsLogin(false)}
                        onLoginUser={submitUserLogin}
                    />
                    </> : 
                    <SignUpForm
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        onEmailChange={(e) => setEmail(e.target.value)}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                        isSignUpDisabled={isSignUpDisabled}
                        signUp={submitSignup}
                    />
            }
        </div>
    </div>
  );
}

export default AuthForm;
