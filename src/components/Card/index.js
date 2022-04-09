
import './styles.css';

const Card = ({ medName, saltName, manufacturer, mrp, handleNotify }) => {

    return (
        <button onClick={() => handleNotify(medName)}>
            <div className="card">
                <h2>{medName}</h2>
                <p>{saltName}</p>
                <p>{manufacturer}</p>
                <b>{`Rs ${mrp}`}</b>
            </div>
        </button>
    );
}

export default Card;