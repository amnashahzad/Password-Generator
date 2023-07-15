document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
  const passwordLength = 12; // Change this value to adjust password length
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[{]};:,<.>?';

  let charset = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById('password').value = password;
}
