import { useDispatch, useSelector } from 'react-redux';
import { clearStarships, deleteStarship, fetchStarships, selectAllStarships } from "../features/starships/starshipsSlice";

export default function StarshipsPage() {
    const dispatch = useDispatch();

    const starships = useSelector(selectAllStarships);
    const status = useSelector((state) => state.starships.status);

    const handleLoadAll = () => {
        dispatch(fetchStarships());
    }

    const handleClearAll = () => {
        dispatch(clearStarships());
    }

    const handleDeleteOne = (id) => {
        dispatch(deleteStarship(id));
    }

    return (
        <div className="page">
            <h2 className="page-title">Starships</h2>

            <div className="page-toolbar">
                <button onClick={handleLoadAll}>Load starships</button>
                <button onClick={handleClearAll} className="secondary">Delete all</button>
            </div>

            {status === 'loading' && <p className="state-message">Loading...</p>}
            {status === 'failed' && <p className="state-message error">Error: {error}</p>}

            <ul className="list">
                {starships.map((ship) => (
                    <li className="list-item" key={ship.url}>
                        <span className="list-item-title">{ship.name}</span>
                        <button className="secondary" onClick={() => handleDeleteOne(ship.url)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

