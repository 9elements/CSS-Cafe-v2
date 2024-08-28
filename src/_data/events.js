const { datoRequest } = require("../dato/index");

module.exports = async function () {
  const { allEvents: events } = await datoRequest(`
    {
      allEvents {
        id
        title
        dateTime
        description
        meetupLink
        youtubeVideoId
        speakers {
          name
          description
          image {
            url
          }
          twitter {
            text
            url
          }
        }
        websites {
          url
          text
        }
        youtubeLinks {
          url
          text
        }
        codepens {
          url
          text
        }
        recommendedTwitterAccounts {
          url
          text
        }
      }
    }
  `);

  const nextEvent = events.find((event) => {
    const eventDate = new Date(event.dateTime);
    const now = new Date();

    return eventDate > now;
  });

  const nextEventId = nextEvent?.id || "";

  const eventsByYear = events
    .filter((event) => event.id !== nextEventId)
    .reduce((acc, event) => {
      const year = new Date(event.dateTime).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(event);

      return acc;
    }, {});

  const years = Object.keys(eventsByYear).sort((a, b) => b - a);

  return {
    all: events,
    byYear: eventsByYear,
    next: nextEvent,
    previous: events.filter((event) => event.id !== nextEventId),
    years
  };
};
