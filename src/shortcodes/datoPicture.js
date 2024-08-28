function calculateTargetSize(widths, ratio, originWidth) {
  // Sort the widths array in descending order
  widths.sort((a, b) => b - a);

  let targetWidth = widths[widths.length - 1]; // Start with the smallest width

  for (let width of widths) {
    if (width <= originWidth) {
      targetWidth = width;
      break;
    }
  }

  const targetHeight = Math.floor(targetWidth / ratio);
  return { targetWidth, targetHeight };
}

module.exports = (datoImage) => {
  // Check if at least the imgObj is valid
  // if ((datoImage.imgObj.data && !datoImage.imgObj.data) || !datoImage.imgObj) {
  if (datoImage.imgObj.data === null || !datoImage.imgObj) {
    return "Dato image url must be provided";
  }
  const imgData = datoImage.imgObj;

  if (
    imgData.mimeType == undefined ||
    imgData.mimeType.startsWith("image") == false
  ) {
    return "imgObj must be a valid dato image object";
  }

  // Deconstruct datoImage and provide fallbacks for undefined values
  const {
    formats = ["webp"],
    widths = [400, 800],
    sizes = "(min-width: 22em) 30vw, 100vw",
    classes = "",
    fit = "crop",
    loading = "lazy",
    decoding = "async",
    ratio,
    emptyAlt
  } = datoImage;

  // Get all the needed information from the provided image object
  // 1. given URL (note this starts with // so "https:" will be added later)
  // 2. the img-id used by Strapi
  // 3. the original dimensions of the image (width & height)
  // 4. the calculated ratio of the image
  const imgUrl = imgData.url;
  const originWidth = imgData.width;
  const originHeight = imgData.height;
  const targetRatio = ratio ? ratio : originWidth / originHeight;
  const focalPoint = imgData.focalPoint
    ? imgData.focalPoint
    : { x: 0.5, y: 0.5 };

  // Get the formats that should be included in the picture element.
  // Then check if svg is a) provided by Dato and b) included in the current format list
  // If so, we will generate the picture element manually in the end
  let isSvg = false;
  if (imgData.mimeType == "image/svg+xml" && formats.includes("svg")) {
    isSvg = true;
  }

  let alt = imgData.alt || "";
  alt = alt.replaceAll('"', "&quot;");
  if (emptyAlt === "true") {
    alt = "";
  }

  // Use Node's URL and path modules to extract the filename
  const parsedUrl = new URL(imgUrl);

  // Calculate target dimensions based on the aspect ratio
  const targetSize = calculateTargetSize(widths, targetRatio, originWidth);

  // prettier-ignore
  const datoImageUrl = `${imgUrl}?fit=${fit}&fp-x=${focalPoint["x"]}&fp-y=${focalPoint["y"]}&w=${targetSize.targetWidth}&h=${targetSize.targetHeight}`;

  // for non-SVG we will use the 11ty-image plugin to generate the picture element for us
  // in case of svg this is not needed and we create the code manually
  let generatedPicture;

  if (!isSvg) {
    generatedPicture = `<img class="${classes}" alt="${alt}" src="${datoImageUrl}" eleventy:widths="${widths}" sizes="${sizes}" loading="${loading}" decoding="${decoding}"/>`;
  } else {
    generatedPicture = `<picture><img eleventy:ignore class="${classes}" alt="${alt}" src="${imgUrl}" width="${originWidth}" height="${originHeight}"></picture>`;
  }

  return generatedPicture;
};
