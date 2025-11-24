import { Route, Routes, useNavigate } from "react-router";
import Contacts from "../Contacts/Contacts";
import Form from "../Form/Form";
import Page404 from "../Page404/Page404";
import './App.css';
import { useEffect, useState } from "react";
import { defaultLanguage, defaultTheme, defaultUser, getText, LanguageContext, ThemeContext, UserContext } from "../../contexts/contexts";
import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";


export default function App() {
    const [items, setItems] = useState([]);
    const [language, setLanguage] = useState(defaultLanguage);
    const [theme, setTheme] = useState(defaultTheme);
    const [user, setUser] = useState(defaultUser);

    const loadData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setItems(result);
    }

    useEffect(() => {
        loadData();
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
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
        setLanguage(language);
    }

    const handleThemeChange = (theme) => {
        setTheme(theme);
    }

    const currentLanguage = { value: language, changeLanguage: handleLanguageChange };
    const currentTheme = { theme, changeTheme: handleThemeChange };
    const currentUser = { user, setUser };

    useEffect(() => {
        const body = document.body;
        body.classList.remove("light-theme", "dark-theme");
        body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
    }, [theme])


    return (
        <>
            <UserContext.Provider value={currentUser}>
                <LanguageContext.Provider value={currentLanguage}>
                    <ThemeContext.Provider value={currentTheme}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Contacts items={items} onDelete={handleDelete} />} />
                            <Route path="/form" element={<Form onSave={handleSave} />} />
                            <Route path="*" element={<Page404 />} />
                            <Route path="/registration" element={<SignUp />} />
                            <Route path="/authorization" element={<SignIn />} />
                        </Routes>
                    </ThemeContext.Provider>
                </LanguageContext.Provider>
            </UserContext.Provider>
        </>
    )
}






/* 
1. {authoraized && userContext}
2. 
if (!authorized) {
    u can't see list of contacts instead of it - message about authorization
    and
    u see buttons signup and sign in
    if u authorized u see on the same place your name
}

if (user.role === 'admin') {
    u can add/delete/edit
}

if (user.role === 'user') {
    u can only see contacts
}

3. signup -> info save in json -> authorized === 'true'
4.signIn -> aiuthorized === 'true'

*/