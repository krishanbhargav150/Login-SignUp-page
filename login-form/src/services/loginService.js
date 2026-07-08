

export async function loginUser(email, password) {

    const params = new URLSearchParams({ email, password });
    const url = `http://localhost:3002/login/user?${params.toString()}`;
    console.log(url);

    try {
        //console.log(`Email: ${email}, Password: ${password}`);
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            const error = new Error('Invalid email or password');
            error.isLoginError = true;
            throw error;
        }

        console.log('Login successful');
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw {
            message: error.message,
            isLoginError: error.isLoginError || false
        };
    }
}