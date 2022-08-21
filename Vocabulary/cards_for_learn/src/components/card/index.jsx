import './styles.scss'

function Word(props) {
    return (
        <div className="word-id">
            <div className="word-name">{props.name}</div>
            <div className="word-mean">{props.mean}</div>
            <div className="word-transcription">{props.transcription}</div>
            <div className="word-translate">{props.translate}</div>
            <div className="word-topic">{props.topic}</div>
        </div>
    )
}

export default Word
