const { datoRequest } = require("../dato/index");

module.exports = async function () {
  const { allSpeakers: speakers } = await datoRequest(`
    {
      allSpeakers(first: 100 orderBy: name_ASC) {
        name
        description
        image {
          url
        }
        twitter {
          text
          url
        }
        events: _allReferencingEvents {
          title
          dateTime
          speakers {
            name
            description
            image {
              url
            }
          }
        }
      }
    }
  `);

  return speakers;
};
