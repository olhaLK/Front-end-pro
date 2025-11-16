import { useContext } from "react";
import { getText, LanguageContext, ThemeContext } from "../../contexts/contexts";

export default function Header() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const { theme, changeTheme } = useContext(ThemeContext);

    console.log('Current language:', language);
    console.log('Current theme:', theme);
    
    return (
        <>
            <div>
                <span>{getText(language, 'language')}:</span>
                <button type="button" onClick={() => changeLanguage('en')}>English</button>
                <button type="button" onClick={() => changeLanguage('ua')}>Українська</button>
            </div>

            <div>
                <span>{getText(language, 'theme')}:</span>
                <button type="button" onClick={() => changeTheme('light')}>Light</button>
                <button type="button" onClick={() => changeTheme('dark')}>Dark</button>
            </div>
        </>
    )
}