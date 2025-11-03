import { useState } from 'react';
import Button from '../Button/Button';
import './Questions.css';


export default function Questions({ question, onNext }) {
    const [selected, setSelected] = useState(null);
    const [reveal, setReveal] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    const handleSelect = (index, type) => {
        if (reveal) return;
        setSelected(index);
        setReveal(true);

        const isWrong = type !== 'true';

        setTimeout(() => {
            onNext(isWrong);
            setSelected(null);
            setReveal(false);
        }, 1000)
    }

    const buttons = [];

    for (let i = 0; i < question.answers.length; i++) {
        const answer = question.answers[i];
        buttons.push(
            <Button
                key={i}
                text={answer.text}
                type={answer.type}
                isRevealed={reveal}
                isSelected={selected === i}
                isWrong={isWrong && selected === i}
                onClick={() => handleSelect(i, answer.type)}
            />
        )
    }

    return (
        <div>
            <h2>{question.text}</h2>
            {buttons}
        </div>
    )
}