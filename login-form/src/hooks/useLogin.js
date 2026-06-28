import { useState } from "react";

function useLogin() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const isFormValid =
            email.trim() !== "" &&
            password.trim() !== "";
        const [errors, setErrors] = useState({
            email: "",
            password: "",
        });

        const [confirmPassword, setConfirmPassword] = useState("");


        const submitLogin = () => {

        const newErrors = {
            email: "",
            password: "",
        }

        if(!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!email.includes("@")) {
            newErrors.email = "Invalid email";
        }

        
        if(!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }   

        setErrors(newErrors);

        if(newErrors.email || newErrors.password) {
            console.log("Validation errors:", newErrors);
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);

    }


        return {
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
        }
}

export default useLogin;