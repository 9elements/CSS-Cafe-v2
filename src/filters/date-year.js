const { DateTime } = require("luxon");

module.exports = (value) => {
  const dateObject = DateTime.fromISO(value);
  return `${dateObject.toFormat("yyyy")}`;
};
