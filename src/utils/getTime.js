export const getTime = (isoString) => {
  const dateObj = new Date(isoString);
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // e.g. "10:30"
  return time;
}