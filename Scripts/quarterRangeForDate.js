function quarterRangeForDate(date, inputFormat, offset) {
  const start = moment()
    .quarter(moment(date, inputFormat).quarter())
    .startOf("quarter");
  const end = moment()
    .quarter(moment(date, inputFormat).quarter())
    .endOf("quarter");
  console.log({start,end})

    return `${start.format('YYYY.MM')}-${end.format('YYYY.MM')}`

}
module.exports = quarterRangeForDate;
