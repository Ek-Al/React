import '../styles/App.css';
import React from 'react';
import Word from './card/index';

const words = [{
  "id":"12097",
  "english":"red",
  "transcription":"[red]",
  "russian":"красный",
  "tags":"цвета",
  "tags_json":"[\"u0446u0432u0435u0442u0430\"]"
},{
  "id":"12101",
  "english":"orange",
  "transcription":"[ˈɒrɪndʒ]",
  "russian":"оранжевый",
  "tags":"цвета",
  "tags_json":"[\"u0446u0432u0435u0442u0430\"]"
},{
  "id":"12104",
  "english":"yellow",
  "transcription":"[ˈjeləʊ]",
  "russian":"желтый",
  "tags":"цвета",
  "tags_json":"[\"u0446u0432u0435u0442u0430\"]"
},{
  "id":"12106",
  "english":"green",
  "transcription":"[ɡriːn]",
  "russian":"зеленый",
  "tags":"цвета",
  "tags_json":"[\"u0446u0432u0435u0442u0430\"]"
},{
  "id":"12118",
  "english":"finger",
  "transcription":"[ˈfɪŋɡə]",
  "russian":"палец",
  "tags":"анатомия",
  "tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"
},{
  "id":"12127",
  "english":"readability",
  "transcription":"[riːdəˈbɪlɪtɪ] ",
  "russian":"читабельность",
  "tags":"IT",
  "tags_json":"[\"IT\"]"
},{
  "id":"12130",
  "english":"argument",
  "transcription":"[ˈɑːgjʊmənt]",
  "russian":"аргумент",
  "tags":"IT",
  "tags_json":"[\"IT\"]"
},{
  "id":"12131",
  "english":"restructuring",
  "transcription":"[riːˈstrʌkʧərɪŋ]",
  "russian":"трансформация",
  "tags":"IT",
  "tags_json":"[\"IT\"]"
},{
  "id":"12134",
  "english":"stack",
  "transcription":"[stæk]",
  "russian":"стек",
  "tags":"IT",
  "tags_json":"[\"IT\"]"
},{
  "id":"12136",
  "english":"hardware",
  "transcription":"[ˈhɑːdwɛə]",
  "russian":"оборудование",
  "tags":"IT",
  "tags_json":"[\"IT\"]"
},{
  "id":"12154",
  "english":"deployment",
  "transcription":"[dɪˈplɔɪmənt]",
  "russian":"развертывание",
  "tags":"технологии",
  "tags_json":"[\"u0442u0435u0445u043du043eu043bu043eu0433u0438u0438\"]"
}]

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className="container">English Dictionary </div>
      </div>

      <div className='content'>
        <div className="englishCard">
          {words.map((word) =>
            <Word key ={word.id}
                  english = {word.english}
                  transcription = {word.transcription}
                  russian = {word.russian}
                  tags = {word.tags}
            />
          )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
