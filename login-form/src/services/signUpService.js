const url = 'http://localhost:3002/login/signup';

export async function signUp(email, password) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Failed to sign up');
        }  
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }   
}