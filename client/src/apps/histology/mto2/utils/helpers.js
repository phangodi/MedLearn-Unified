export const safe = (arr) => Array.isArray(arr) ? arr : [];
export const safeString = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val.name) return val.name;
  return String(val);
};
