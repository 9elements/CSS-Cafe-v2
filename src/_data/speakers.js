const { datoRequest } = require("../dato/index");

module.exports = async function () {
  const { allSpeakers: speakers } = await datoRequest(`
    {
      allSpeakers(first: 100) {
        name
        description
        events: _allReferencingEvents {
          title
          dateTime
          speakers {
            name
          }
        }
      }
    }
  `);

  return speakers;
};
