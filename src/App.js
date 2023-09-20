//Importacion de Hook useState
import React, { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media2.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47l1ygnlkod7r09m89smcuttgq86c5ab1mswunmpkb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/pO1H8mAU7geAw/giphy.gif?cid=ecf05e47offop6neuhe7kxxkuqgr25dmtreph71jb8fcckkb&ep=v1_gifs_related&rid=giphy.gif&ct=g'
]
function App() {
  //El useState maneja dos posiciones
  //El valor del estado
  //La actualizacion de dicho stado
  const [gifs, setGifs] =  useState([]);

  return (
    <div className="App">
      <section className="App-content">
       <img src={gifs} />
      </section>
    </div>
  );
}

export default App;
