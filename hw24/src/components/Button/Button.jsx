import './Button.css'; 


export default function Button({ text, type, isRevealed, isSelected, onClick }) {
    const isCorrect = type === 'true';
    let className = 'btn';

    if (isRevealed) {
        if (isCorrect) {
            className += ' btn-correct';
        } else if (isSelected) {
            className += ' btn-wrong';
        } else {
            className += ' btn-disabled';
        }
    }
    
    return (
        <button type="button" className={className} onClick={onClick} disabled={isRevealed}>
            {text}
        </button>
    )
}

