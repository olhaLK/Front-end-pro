import './Contacts.css';
import { useNavigate } from "react-router";

export default function Contacts({ items, onDelete }) {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/form');
    }

    const handleDelete = (id) => {
        onDelete(id);
    }

    return (
        <div className="contacts-wrapper">
            <button type="button" onClick={handleAdd} className="btn-add">Add new contact</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(el => (
                        <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(el.id)} className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}