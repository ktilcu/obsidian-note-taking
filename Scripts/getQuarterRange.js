function getQuarterRange(date, inputFormat, quarterIndex, outputFormat) {
  const start = moment()
    .quarter(moment(date, inputFormat).quarter())
    .add(1 * quarterIndex, 'quarter')
    .startOf("quarter")
    .format(outputFormat);
  const end = moment()
    .quarter(moment(date, inputFormat).quarter())
    .add(1 * quarterIndex, 'quarter')
    .endOf("quarter")
    .format(outputFormat);

  return `${start}-${end}`;
}
module.exports = getQuarterRange;
