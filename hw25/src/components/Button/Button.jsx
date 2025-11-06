import "./Button.css";


export default function Button({ onClick }) {
    return (
        <button type="button" className="showBtn" onClick={onClick}>
            Show Results
        </button>
    )
}

