function getWeekDates(date, inputFormat, weekIndex, outputFormat) {
  console.log(date)
  const monday = moment(date, inputFormat)
    .add(6 + 7 * weekIndex, "day")
    .startOf("isoWeek");
  const friday = moment(monday).add(4, "day").format(outputFormat);

  return `${monday.format(outputFormat)}-${friday}`;
}

module.exports = getWeekDates;
