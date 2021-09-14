
export function parseDateString(datetime){
    return new Date(Date.parse(datetime))
}

export function isNight(date) {
  if (date instanceof Date) {
    let hours = date.getHours();
    return hours >= 18;
  }
  return false;
}
