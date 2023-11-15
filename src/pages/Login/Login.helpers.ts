export const getPasswordValidationError = (password: string): string => {
  if (password.length < 8) {
    return 'Password length should be minimum 8 characters';
  }

  const regexUppercase = /[A-Z]/;
  if (!regexUppercase.test(password)) {
    return 'Password should include at least 1 uppercase letter';
  }

  const regexLowercase = /[a-z]/;
  if (!regexLowercase.test(password)) {
    return 'Password should include at least 1 lowercase letter';
  }

  const regexSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
  if (!regexSpecialCharacter.test(password)) {
    return 'Password should include at least 1 special character';
  }

  // Form is considered valid
  return '';
}