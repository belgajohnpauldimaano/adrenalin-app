export const getMMDDYYYY = (date) => {
  return `${date.getDate()}/${ date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth() }/${date.getFullYear()}`;
}