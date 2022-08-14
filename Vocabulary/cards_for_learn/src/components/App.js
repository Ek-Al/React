import './App.css';
import React from 'react';
import Word from './card/card';

const words = [{
  "name":,
  "mean":,
  "transcription":,
  "translate":,
  "topic":,
}
]

function App() {
  return (
    <div className="App">
      <div className="container">
        {words.map((word) =>
          <Word key ={word.name}
                mean = {word.mean}
                transcription = {word.transcription}
                translate = {word.translate}
                topic = {word.topic}
          />
        )
        }
      </div>

    </div>
  );
}

export default App;
