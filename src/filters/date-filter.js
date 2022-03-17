const { DateTime } = require("luxon");

module.exports = (value) => {
  const dateObject = DateTime.fromISO(value);
  const Month = dateObject.toFormat("MMM");

  return `${
    Month == "May"
      ? dateObject.toFormat("MMM yyyy")
      : dateObject.toFormat("MMM. yyyy")
  }`;
};
