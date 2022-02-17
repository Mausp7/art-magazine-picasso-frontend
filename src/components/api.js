import { throttle } from "lodash";

// https://lodash.com/docs/4.17.15#throttle
const json = throttle(async (endpoint) => {
  // https://www.artic.edu/articles/902/public-access-to-our-public-presence-sharing-our-api
  const apiUrl = `https://api.artic.edu/api/v1${endpoint}`;

  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`error loading ${endpoint} (${res.status})`);
  }
  return res.json();
}, 200);

// http://api.artic.edu/docs/#collections
export const search = async (query, ...fields) => {
  let endpoint = `/artworks/search?q=${query}&limit=25`;
  if (fields.length) {
    endpoint += "&fields=" + fields.join(",");
  }
  return json(endpoint);
};

// http://api.artic.edu/docs/#images
export const artworkImageUrl = (id, width = 843) =>
  `https://www.artic.edu/iiif/2/${id}/full/${width},/0/default.jpg`;
