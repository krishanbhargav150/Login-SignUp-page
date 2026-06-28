function useDisableSignUpButton(email, password, confirmPassword) {
    return email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword;
}

export default useDisableSignUpButton;