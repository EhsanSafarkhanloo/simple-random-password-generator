export function generateRandomPassword({
  length = 8,
  includeNumbers = true,
  includeLowercase = true,
  includeUppercase = true,
  includeSpecialChars = true,
}): string {
  let charset = "";
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeSpecialChars) {
    charset += "!@#$%^&*()_+{}[]|;:<>,.?/";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
