
export function parseDateString(datetime){
    let date = new Date(datetime);
    if (date instanceof Date) {
      return date;
    }
    return false;
}

export function isNightCheck(date) {
  if (date instanceof Date) {
    let hours = date.getHours();
    return hours >= 18;
  }
  return false;
}
