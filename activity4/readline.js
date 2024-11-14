import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

const isValidPassword = (password) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase;
};

const main = async () => {
    while (true) {
        try {
            const password = await rl.question('Enter a password: ');
            if (isValidPassword(password)) {
                console.log('Password is valid!');
                break; 
            } else {
                console.log('Invalid password! Password must be at least 6 characters long and contain both uppercase and lowercase letters.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    rl.close(); 
};
main();