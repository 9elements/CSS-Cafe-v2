const { DateTime } = require("luxon");
// Utils

// Filters
const readableDate = require("./src/filters/readableDate.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
// const markdownFilter = require("./src/filters/markdown-filter.js");
const dateFilter = require("./src/filters/date-filter.js");
const dateYearFilter = require("./src/filters/date-year.js");
const speakerNamesFilter = require("./src/filters/speaker-names.js");

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const purgeCSS = require("./src/transforms/css-purge-inline.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

/** @param {import("./node_modules/@11ty/eleventy/src/UserConfig.js").default} config */
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
  config.addFilter("speakerNames", speakerNamesFilter);
  config.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Add Shortcodes
  config.addShortcode("icon", require("./src/shortcodes/icon.js"));
  config.addShortcode(
    "datoPicture",
    require("./src/shortcodes/datoPicture.js")
  );

  config.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html",

    outputDir: "./dist/assets/image/",
    urlPath: "/assets/image/",

    // Add any other Image utility options here:

    // optional, output image formats
    formats: ["avif", "webp"],

    // optional, output image widths
    widths: ["auto"],
    sizes: "(max-width: 600px) 100vw, 50vw", // Responsive sizes

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async"
    }
  });

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
