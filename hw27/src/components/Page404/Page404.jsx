import { useContext } from 'react';
import './Page404.css';
import { getText, LanguageContext, ThemeContext } from '../../contexts/contexts';

export default function Page404() {
    const { value } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="page404-container">
            <h1 className="page404-heading">404</h1>
            <p className="page404-message">{getText(value, "notFoundMessage")}</p>
            <a href="/" className="page404-link">{getText(value, "backHome")}</a>
        </div>
    );
}
