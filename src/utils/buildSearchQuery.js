export const buildSearchQuery = (form) => {
  const and = [];

  // Keyword search (firstName or lastName contains)
  if (form.keyword && form.keyword.trim() !== '') {
    and.push({
      or: [
        { firstName_contains: form.keyword },
        { lastName_contains: form.keyword }
      ]
    });
  }

  // Date range
  const dateRange = {};
  if (form.from) {
    dateRange.createdAt_gte = form.from;
  }
  if (form.until) {
    dateRange.createdAt_lte = form.until;
  }
  if (Object.keys(dateRange).length > 0) {
    and.push(dateRange);
  }

  return and.length > 0 ? { and } : {};
}
