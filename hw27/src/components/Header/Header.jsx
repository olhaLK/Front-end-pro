import "./Header.css";
import { useContext } from "react";
import { getText, LanguageContext, ThemeContext } from "../../contexts/contexts";

export default function Header() {
    const { value, changeLanguage } = useContext(LanguageContext);
    const { theme, changeTheme } = useContext(ThemeContext);

    console.log('Current language:', value);
    console.log('Current theme:', theme);
    
    return (
        <div className="header-container">
            <div className="header-section">
                <span>{getText(value, 'language')}:</span>
                <button className="header-btn" type="button" onClick={() => changeLanguage('en')}>English</button>
                <button className="header-btn" type="button" onClick={() => changeLanguage('ua')}>Українська</button>
            </div>

            <div className="header-section">
                <span>{getText(value, 'theme')}:</span>
                <button className="header-btn" type="button" onClick={() => changeTheme('light')}>Light</button>
                <button className="header-btn" type="button" onClick={() => changeTheme('dark')}>Dark</button>
            </div>
        </div>
    )
}