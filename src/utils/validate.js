export const validate = (value, validation = {}) => {
    console.log("value", value)
  if (validation.required && (!value || value.trim() === '')) {
    return 'This field is required.';
  }
  if (validation.minLength && value && value.length < validation.minLength) {
    return `Minimum length is ${validation.minLength}.`;
  }
  if (validation.idDate) {
    // Accepts YYYY-MM-DD (basic check)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (value && !dateRegex.test(value)) {
      return 'Invalid date format.';
    }
  }
  return null;
}
