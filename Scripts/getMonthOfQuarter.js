function getMonthOfQuarter(date, inputFormat, monthIndex) {
  return moment(date, inputFormat)
    .startOf("quarter")
    .add(1 * monthIndex, 'month')
}

module.exports = getMonthOfQuarter;
