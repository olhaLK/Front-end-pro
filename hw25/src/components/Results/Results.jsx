import { useState } from "react";
import Button from "../Button/Button";
import List from "../List/List";
import "./Results.css";


export default function Results() {
    const [catClickCounter, setCatClickCounter] = useState(0);
    const [dogClickCounter, setDogClickCounter] = useState(0);
    const [rabbittClickCounter, setRabbittClickCounter] = useState(0);
    const [showResults, setShowResults] = useState(false);

    function handleItemClick(id) {
        ({
            1: setCatClickCounter,
            2: setDogClickCounter,
            3: setRabbittClickCounter,
        }[id])?.((prev) => prev + 1);
    }

    function handleShowResults() {
        setShowResults(true);
    }

    return (
        <>
            <List onClick={handleItemClick} />
            <Button onClick={handleShowResults} />

            {showResults && (
                <div className="results">
                    <p>Cat: {catClickCounter}</p>
                    <p>Dog: {dogClickCounter}</p>
                    <p>Rabbit: {rabbittClickCounter}</p>
                </div>
            )}
        </>
    )
}