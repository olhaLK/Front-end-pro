import { useDispatch, useSelector } from 'react-redux';
import { clearPeople, deletePerson, fetchPeople, selectAllPeople } from "../features/people/peopleSlice";


export default function PeoplePage() {
    const dispatch = useDispatch();

    const people = useSelector(selectAllPeople);
    const status = useSelector((state) => state.people.status);
    const error = useSelector((state) => state.people.error);

    const handleLoadAll = () => {
        dispatch(fetchPeople());
    }

    const handleClearAll = () => {
        dispatch(clearPeople());
    }

    const handleDeleteOne = (id) => {
        dispatch(deletePerson(id));
    }


    return (
        <div className="page">
            <h2 className="page-title">People</h2>

            <div className="page-toolbar">
                <button onClick={handleLoadAll}>Load people</button>
                <button onClick={handleClearAll} className="secondary">Delete all</button>
            </div>

            {status === 'loading' && <p className="state-message">Loading...</p>}
            {status === 'failed' && <p className="state-message error">Error: {error}</p>}

            <ul className="list">
                {people.map((person) => (
                    <li className="list-item" key={person.url}>
                        <span className="list-item-title">{person.name}</span>
                        <button className="secondary" onClick={() => handleDeleteOne(person.url)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

