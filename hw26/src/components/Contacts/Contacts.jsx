import { useEffect, useState } from "react";
import Form from "../Form/Form";
import './Contacts.css';


export default function Contacts() {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const loadData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setItems(result);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleAdd = () => {
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    const handleDelete = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }

    const handleSave = (contact) => {
        setItems([...items, contact]);
        setModalOpen(false);
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
            {modalOpen && (<Form onClose={handleClose} onSave={handleSave} />)}
        </div>
    )
}