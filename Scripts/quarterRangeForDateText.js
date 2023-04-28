function quarterRangeForDateText(date, inputFormat, offset) {
  const start = moment()
    .quarter(moment(date, inputFormat).quarter())
    .startOf("quarter");
  const end = moment()
    .quarter(moment(date, inputFormat).quarter())
    .endOf("quarter");

    return `${start.format('MMM YYYY')}-${end.format('MMM YYYY')}`

}
module.exports = quarterRangeForDateText;
