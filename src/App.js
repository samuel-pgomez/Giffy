//Importacion de Hook useState
import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";

//const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

export default function App() {
  //El useState maneja dos posiciones
  //El valor del estado
  //La actualizacion de dicho stado
  const [gifs, setGifs] = useState([]);

  //useEffect
  //La funcion
  //Las dependencias (si no hay solo se ejecuta una sola vez)
  useEffect(function () {
    //console.log('actualizando los gifs')
    //Consultando la API
    getGifs({ keyword: "rick" }).then((gifs) => setGifs(gifs));
    //
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          //Renderiza cada una de las imagenes para que aparezcan todas*/
          gifs.map((singleGif => <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id}/>)
         
          ) /**Al hacer click evalua el eevento y cambia de Gif */
        }
        {/*<button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>
        */}
      </section>
    </div>
  );
}

//export default App;
