export const getDate = (isoString, format) => {
  const dateObj = new Date(isoString);
  
  if (format) {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return dateObj.toLocaleDateString();
}