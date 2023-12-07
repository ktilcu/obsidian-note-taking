function getDaysOfWeek(weekDate, inputFormat, outputFormat) {
  const [start, end] = weekDate.split('-').map(d => moment(d, inputFormat))
  console.log({start, end})
  return enumerateDaysBetweenDates(start, end).map(d => d.format(outputFormat));
}

function enumerateDaysBetweenDates(startDate, endDate) {
  var now = startDate.clone(), dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(now.clone());
    now.add(1, 'days');
  }
  return dates;
};

module.exports = getDaysOfWeek;
