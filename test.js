// Random Password Generator
function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Generate a password of random length between 8 and 16
const randomLength = Math.floor(Math.random() * 9) + 8; // Length between 8 and 16
const password = generatePassword(randomLength);

console.log("Your Random Password is:", password);

// Bonus: Display password strength
if (randomLength <= 10) {
    console.log("Password Strength: Weak");
} else if (randomLength <= 12) {
    console.log("Password Strength: Medium");
} else {
    console.log("Password Strength: Strong");
}
