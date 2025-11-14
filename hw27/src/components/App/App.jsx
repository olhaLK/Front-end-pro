import { Route, Routes, useNavigate } from "react-router";
import Contacts from "../Contacts/Contacts";
import Form from "../Form/Form";
import Page404 from "../Page404/Page404";
import './App.css';
import { useEffect, useState } from "react";


export default function App() {
    const [items, setItems] = useState([]);

    const loadData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setItems(result);
    }

    useEffect(() => {
        loadData();
    }, []);

    const navigate = useNavigate();

    const handleSave = (contact) => {
        setItems([...items, contact]);
        navigate('/');
    }

    const handleDelete = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id)); 
    }

    return (
        <>
            <h2>Contact list</h2>
            <Routes>
                <Route path="/" element={<Contacts items={items} onDelete={handleDelete} />} />
                <Route path="/form" element={<Form onSave={handleSave} />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

        </>
    )
}