function dateCompare(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = dateStr2 ? new Date(dateStr2) : new Date();

  if (date1 <= date2) {
    const fecha = {
      startDate: dateStr1,
      endDate: date2.toISOString(),
    };
    return fecha;
  } else if (date1 > date2) {
    const fecha = {
      startDate: date2.toISOString(),
      endDate: dateStr1,
    };
    return fecha;
  }
}
export default dateCompare;
