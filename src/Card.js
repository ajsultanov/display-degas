import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <img src={props.imgURL} alt={`${props.workTitle} by ${props.artistName}`}/>
            <br />
            <cite id='workTitle'>{props.workTitle}</cite>
            <p id='byline'>by {props.artistName}, {props.workDate}</p>
        </div>
    );
}

export default Card;