

export async function loginUser(email, password) {

    const url = new URL('http://localhost:3002/login/check-user');
    url.searchParams.append('email', email);
    url.searchParams.append('password', password);

    try {
        console.log(`Email: ${email}, Password: ${password}`);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Invalid email or password');
        }

        console.log('Login successful');
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}