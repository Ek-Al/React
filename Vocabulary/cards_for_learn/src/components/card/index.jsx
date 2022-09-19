import './styles.scss'

function Word(props) {
    return (
        <div className="word-id">
            <div className="word-english">{props.english}</div>
            <div className="word-transcription">{props.transcription}</div>
            <div className="word-russian">{props.russian}</div>
            <div className="word-tags">{props.tags}</div>
        </div>
    )
}

export default Word
