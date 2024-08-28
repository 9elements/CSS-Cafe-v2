const datoRequest = async (query, isPreview = false) => {
  const endpoint = isPreview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const data = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.DATO_READONLY_API_TOKEN}`
    },
    body: JSON.stringify({ query })
  })
    .then((res) => res.json())
    .then((res) => {
      if (res?.errors?.length) {
        res.errors.forEach((error) => {
          console.error("❗❗ [DATO Fetch Error]", error);
        });
        return null;
      }

      return res.data;
    })
    .catch((error) => {
      console.error("[DATO Fetch Error]", error);
    });

  return data;
};

module.exports = { datoRequest };
