const apiUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

export default function getGifs() {
  //Consultando la API
  return fetch(apiUrl)
    .then((res) => res.json()) //Conversion a json
    .then((response) => {
      const { data = [] } = response;
      //Recorriendo cada gifs
      if (Array.isArray(data)) {
        const gifs = data.map((image) => image.images.fixed_width_small.url);
        return gifs;
      }
    });
}
