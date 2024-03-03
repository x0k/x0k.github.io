export function getYearsSinceDate(inputDate: Date) {
  const currentDate = new Date();
  let years = currentDate.getFullYear() - inputDate.getFullYear();
  if (
    currentDate.getMonth() < inputDate.getMonth() ||
    (currentDate.getMonth() === inputDate.getMonth() &&
      currentDate.getDate() < inputDate.getDate())
  ) {
    years--;
  }
  return years;
}