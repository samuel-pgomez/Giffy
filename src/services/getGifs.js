const apiKey = "Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp";

//Keyword como parametro
export default function getGifs({ keyword = "morty" } = {}) {
  //Para consultar la api con parametros
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  //Consultando la API
  return fetch(apiUrl)
    .then((res) => res.json()) //Conversion a json
    .then((response) => {
      const { data = [] } = response;
      //Recorriendo cada gifs
      if (Array.isArray(data)) {
        const gifs = data.map((image) => { 
          //Se obtiene estos datos desde API
          const {images, title, id} = image
          const { url } = image.images.fixed_width_small.url});
        return { title, id, url };
      }
    });
}
