async function findTrends() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=8a159abf488cbab948145f114c044b5b'
  );
  const data = await response.json();

  return data;
}

async function findMovie(query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=8a159abf488cbab948145f114c044b5b&query=${query}&page=${page}&include_adult=false`
  );
  const data = await response.json();

  return data;
}

async function getInfo(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8a159abf488cbab948145f114c044b5b`
  );
  const data = await response.json();

  return data;
}

async function getCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8a159abf488cbab948145f114c044b5b`
  );
  const data = await response.json();

  return data;
}

async function getViews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=8a159abf488cbab948145f114c044b5b`
  );
  const data = await response.json();

  return data;
}

async function getImages(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=8a159abf488cbab948145f114c044b5b`
  );
  const data = await response.json();

  return data;
}

export { findTrends, findMovie, getInfo, getCast, getViews, getImages };
