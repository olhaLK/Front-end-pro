import { useContext } from 'react';
import './Contacts.css';
import { useNavigate } from "react-router";
import { getText, LanguageContext, ThemeContext } from '../../contexts/contexts';

export default function Contacts({ items, onDelete }) {
    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    const handleAdd = () => {
        navigate('/form');
    }

    const handleDelete = (id) => {
        onDelete(id);
    }

    return (
        <div className={`contacts-wrapper ${theme === 'dark' ? 'contacts-wrapper-dark' : 'contacts-wrapper-light'}`}>
            <button type="button" onClick={handleAdd} className="btn-add">{getText(language, 'add')}</button>
            <table>
                <thead>
                    <tr>
                        <th>{getText(language, 'name')}</th>
                        <th>{getText(language, 'phone')}</th>
                        <th>{getText(language, 'actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(el => (
                        <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(el.id)} className="btn-delete">
                                    {getText(language, 'delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}