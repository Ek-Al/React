import React from "react";
import '../styles/App.css';
import Card from './Card';

const cards = [{
  "id": "1",
  "name": "Безлимитный 300",
  "price": "300",
  "mbit": "до 10 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(99, 209, 245)",
  isChecked: false,
}, {
  "id": "2",
  "name": "Безлимитный 450",
  "price": "450",
  "mbit": "до 50 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(53, 172, 152)",
  isChecked: false,
}, {
  "id": "3",
  "name": "Безлимитный 550",
  "price": "550",
  "mbit": "до 100 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(219, 102, 78)",
  isChecked: false,
}, {
  "id": "4",
  "name": "Безлимитный 1000",
  "price": "1000",
  "mbit": "до 200 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(68, 63, 63)",
  isChecked: false,
}];

class App extends React.Component {
  render() {
    return ( 
      <div className = "App">
        {
          cards.map((card) =>
            <Card id={card.id} 
                  name={card.name}  
                  price={card.price} 
                  mbit={card.mbit} 
                  text={card.text}></Card>
          )
        }
      </div>
    );
  }
}

export default App;