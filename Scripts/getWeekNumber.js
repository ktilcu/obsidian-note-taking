function getWeekNumber(date, inputFormat, weekIndex, outputFormat) {
  return moment(date, inputFormat)
    .add(6 + 7 * weekIndex, "day")
    .startOf("isoWeek")
    .format(outputFormat);
}

module.exports = getWeekNumber;
