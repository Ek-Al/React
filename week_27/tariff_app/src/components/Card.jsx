import React from 'react';
import '../styles/Card.css'

function Card(props) {
    return (
        < div className={"tarifCard "} >
            <div className="cardName" style={{ backgroundColor: props.color }}>{props.name}</div>
            <div className="cardPrice" style={{ backgroundColor: props.color }}><span className="rub">руб </span>{props.price}<span className="mes"> /мес</span></div>
            <div className="cardMbit">{props.mbit}</div>
            <div className="cardText">{props.text}</div>
        </ div >
    )
}

export default Card