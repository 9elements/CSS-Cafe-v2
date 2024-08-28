const { DateTime } = require("luxon");
// Utils
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

// Filters
const readableDate = require("./src/filters/readableDate.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
// const markdownFilter = require("./src/filters/markdown-filter.js");
const dateFilter = require("./src/filters/date-filter.js");
const dateYearFilter = require("./src/filters/date-year.js");
const now = DateTime.now;

// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const purgeCSS = require("./src/transforms/css-purge-inline.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/scripts/");

  // Add filters
  config.addFilter("readableDate", readableDate);
  config.addFilter("w3DateFilter", w3DateFilter);
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("dateYearFilter", dateYearFilter);
  config.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });
  // config.addFilter("markdownFilter", markdownFilter);

  // Collections - Returns sampleCollection items, sorted by display order
  // config.addCollection("sampleCollection", (collection) => {
  //   return sortByDisplayOrder(
  //     collection.getFilteredByGlob("./src/sample-collection/*.md")
  //   );
  // });

  // Add Shortcodes
  config.addShortcode("icon", require("./src/shortcodes/icon.js"));
  config.addShortcode(
    "datoPicture",
    require("./src/shortcodes/datoPicture.js")
  );

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("purgeCSS", purgeCSS);
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
