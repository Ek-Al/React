import './hero.css'

function Hero(props) {
    return (
        <div className="hero-card">
            <h2 className="hero-name">{props.name}</h2>
            <div className="hero-alter_ego"><span>Альтер эго: </span>{props.alter_ego}</div>
            <div className="hero-superpowers"><span>Суперсилы: </span>{props.superpowers}</div>
            <img className="hero-img" src={props.url} />
            <div className="hero-description"><span>Подробнее: </span>{props.description}</div>
        </div>
    )
}

export default Hero