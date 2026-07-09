const API_KEY = "56382516-64a69418319801ecbd97e992c";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    (`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
  );

  return response.json();
}