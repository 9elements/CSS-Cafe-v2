/**
 *
 * @param {{ name: string }[]} speakers
 * @returns
 */
const speakerNamesFilter = (speakers) =>
  speakers?.map((speaker) => speaker.name).join(" & ");

module.exports = speakerNamesFilter;
