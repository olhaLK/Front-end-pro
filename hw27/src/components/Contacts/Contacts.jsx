import { useContext } from 'react';
import './Contacts.css';
import { useNavigate } from "react-router";
import { getText, LanguageContext, ThemeContext } from '../../contexts/contexts';

export default function Contacts({ items, onDelete }) {
    const navigate = useNavigate();

    const { value } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    const handleAdd = () => {
        navigate('/form');
    }

    const handleDelete = (id) => {
        onDelete(id);
    }

    return (
        <div className={`contacts-wrapper ${theme === 'dark' ? 'contacts-wrapper-dark' : 'contacts-wrapper-light'}`}>
            <button type="button" onClick={handleAdd} className="btn-add">{getText(value, 'add')}</button>
            <table>
                <thead>
                    <tr>
                        <th>{getText(value, 'name')}</th>
                        <th>{getText(value, 'phone')}</th>
                        <th>{getText(value, 'actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(el => (
                        <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(el.id)} className="btn-delete">
                                    {getText(value, 'delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}