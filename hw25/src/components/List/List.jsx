import { useEffect, useState } from "react";
import "./List.css";


export default function List({ onClick }) {
    const [list, setList] = useState([]);

    const loadData = async () => {
        const response = await fetch('/data.json');
        const result = await response.json();
        setList(result);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <ul>
            {list.map((item, index) => (
                <li 
                    key={index} 
                    onClick={() => onClick(Number(item.id))}
                >
                    {item.content}
                </li>
            ))}
        </ul>
    )
}