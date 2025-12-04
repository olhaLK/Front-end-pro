import { useDispatch, useSelector } from 'react-redux';
import { clearPlanets, deletePlanet, fetchPlanets, selectAllPlanets } from "../features/planets/planetsSlice";

export default function PlanetsPage() {
    const dispatch = useDispatch();

    const planets = useSelector(selectAllPlanets);
    const status = useSelector((state) => state.planets.status);

    const handleLoadAll = () => {
        dispatch(fetchPlanets());
    }

    const handleClearAll = () => {
        dispatch(clearPlanets());
    }

    const handleDeleteOne = (id) => {
        dispatch(deletePlanet(id));
    }

    return (
        <div className="page">
            <h2 className="page-title">Planets</h2>

            <div className="page-toolbar">
                <button onClick={handleLoadAll}>Load planets</button>
                <button onClick={handleClearAll} className="secondary">Delete all</button>
            </div>

            {status === 'loading' && <p className="state-message">Loading...</p>}
            {status === 'failed' && <p className="state-message error">Error: {error}</p>}

            <ul className="list">
                {planets.map((planet) => (
                    <li className="list-item" key={planet.url}>
                        <span className="list-item-title">{planet.name}</span>
                        <button className="secondary" onClick={() => handleDeleteOne(planet.url)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
