document.getElementById("generatePassword").addEventListener("click", generatePassword);
document.getElementById("copyPassword").addEventListener("click", copyToClipboard);

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeLetters = document.getElementById("includeLetters").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let character = "";

    if (includeNumbers) character += numbers;
    if (includeLetters) character += letters;
    if (includeSymbols) character += symbols;

    if (!character) {
        document.getElementById("passwordOutput").innerText = "Select one or more character types.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * character.length);
        password += character[randomIndex];
    }

    document.getElementById("passwordOutput").innerText = `Your Password: ${password}`;
}

function copyToClipboard() {
    const passwordText = document.getElementById("passwordOutput").innerText.replace("Your Password: ", "");
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("¡Password Copy!");
        }).catch(err => {
            alert("Error copy: " + err);
        });
    }
}
