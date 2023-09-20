//Importacion de Hook useState
import React, { useState, useEffect } from 'react';
import './App.css';

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

function App() {
  //El useState maneja dos posiciones
  //El valor del estado
  //La actualizacion de dicho stado
  const [gifs, setGifs] =  useState([]);

  //useEffect
  //La funcion
  //Las dependencias (si no hay solo se ejecuta una sola vez)
  useEffect(function () {
    console.log('actualizando los gifs')
    //Consultando la API
    fetch(apiUrl)
    .then(res => res.json())//Conversion a json
    .then(response =>{
      const {data} = response
      //Recorriendo cada gifs
      const gifs = data.map(image => image.images.fixed_width_small.url)
      setGifs(gifs)
    } )
    //
  }, [])

  return (
    <div className="App">
      <section className="App-content">
       {//Renderiza cada una de las imagenes para que aparezcan todas
        gifs.map(singleGif => <img src={singleGif}/>)
       }{/**Al hacer click evalua el eevento y cambia de Gif */}
       {/*<button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>*/}
      </section>
    </div>
  );
}

export default App;
