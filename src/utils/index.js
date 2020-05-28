export const getMMDDYYYY = (date) => {
  return `${date.getDate()}/${ date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth() }/${date.getFullYear()}`;
}

export const sortQuestions = (order) => (a, b) => {
  if (a.date > b.date) return !order ? -1 : 1;
  if (b.date > a.date) return !order ? 1 : -1;
  return 0;
}
