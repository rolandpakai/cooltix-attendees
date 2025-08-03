export const validateDateInterval = (from, until) => {
  if (from && until && new Date(from) > new Date(until)) {  
    return 'The "from" date cannot be later than the "until" date.';
  } 
  return '';
}