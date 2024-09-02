const READONLY_API_TOKEN = "a1ee73097c77b2aaf9279a975afb3e";

export const datoRequest = async (query, isPreview = false) => {
  const endpoint = isPreview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const data = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${READONLY_API_TOKEN}`
    },
    body: JSON.stringify({ query })
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => {
      console.error("[DATO Fetch Error]", error);
    });

  return data;
};
