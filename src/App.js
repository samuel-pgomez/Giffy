//Importacion de Hook useState
import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

//const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

export default function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('mapache')}>Cambiar keyword</button>
        <ListOfGifs keyword='ecuador' />
      </section>
    </div>
  );
}

//export default App;
