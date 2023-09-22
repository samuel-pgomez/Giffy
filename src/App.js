//Importacion de Hook useState
import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

//Utilizando Wouter
import { Route } from "wouter";

//const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=Wb03bI088BhPf4BKynXAfCFDF6Bb60Zp&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

export default function App() {
  const [keyword, setKeyword] = useState('panda');
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1> 
        <Route 
        component={ListOfGifs}
        path="/gif/:keyword"/>
        
      </section>
    </div>
  );
}

//export default App;
