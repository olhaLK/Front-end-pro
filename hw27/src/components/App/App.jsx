import { Route, Routes, useNavigate } from "react-router";
import Contacts from "../Contacts/Contacts";
import Form from "../Form/Form";
import Page404 from "../Page404/Page404";
import './App.css';
import { useEffect, useState } from "react";
import { defaultLanguage, defaultTheme, getText, LanguageContext, ThemeContext } from "../../contexts/contexts";
import Header from "../Header/Header"; 


export default function App() {
    const [items, setItems] = useState([]);
    const [language, setLanguage] = useState(defaultLanguage);
    const [theme, setTheme] = useState(defaultTheme);

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

    const handleLanguageChange = (language) => {
        console.log('Language changed to:', language); 
        setLanguage(language);
    }

    const handleThemeChange = (theme) => {
        console.log('Theme changed to:', theme);
        setTheme(theme);
    }

    const currentLanguage = { value: language, changeLanguage: handleLanguageChange };
    const currentTheme = { value: theme, changeTheme: handleThemeChange };

    useEffect(() => {
        const root = document.getElementById('root');
        if (root) {
            root.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        }
    }, [theme])

    return (
        <>
        <LanguageContext.Provider value={currentLanguage}>
            <ThemeContext.Provider value={currentTheme}>
                <Header />
                <Routes>
                    <Route path="/" element={<Contacts items={items} onDelete={handleDelete} />} />
                    <Route path="/form" element={<Form onSave={handleSave} />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </ThemeContext.Provider>
        </LanguageContext.Provider>
        </>
    )
}