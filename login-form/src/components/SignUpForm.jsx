import Input from './Input';
import Button from './Button';

function SignUpForm ({
    email,
    password,
    confirmPassword,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    isSignUpDisabled,
    signUp
}) {
    return (
        <div className='form'>
                    <h2>Sign Up Form</h2>
                    <Input
                        type='email'
                        placeholder='abc@gmail.com'
                        value={email}
                        onChange={onEmailChange}
                    />
                    <Input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={onPasswordChange}
                    />
                    <Input
                        type='password'
                        placeholder='confirm password'
                        value={confirmPassword}
                        onChange={onConfirmPasswordChange}
                    />
                    <Button disabled={isSignUpDisabled} onClick={signUp}>
                        Sign Up
                    </Button>
                </div>
    )
}

export default SignUpForm;