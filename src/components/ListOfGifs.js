import React, {useEffect, useState} from "react";
import Gif from "./Gif";
import getGifs from '../services/getGifs'


export default function ListOfGifs({ keyword }) {
      //El useState maneja dos posiciones
  //El valor del estado
  //La actualizacion de dicho stado
  const [gifs, setGifs] = useState([]);

  //useEffect
  //La funcion
  //La keyword funciona como una dependencia del efecto
  //Las dependencias (si no hay solo se ejecuta una sola vez)
  useEffect(function () {
    //console.log('actualizando los gifs')
    //Consultando la API
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
    //
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif 
    id={id} 
    key={id} 
    title={title} 
    url={url} />
  ));
}
