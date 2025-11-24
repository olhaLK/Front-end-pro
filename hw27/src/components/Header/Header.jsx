import "./Header.css";
import { useContext } from "react";
import { getText, LanguageContext, ThemeContext, UserContext } from "../../contexts/contexts";
import { useNavigate } from "react-router";

export default function Header() {
    const { value, changeLanguage } = useContext(LanguageContext);
    const { theme, changeTheme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);


    const authorized = !!user;
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/registration');
    }

    const handleSignIn = () => {
        navigate('/authorization')
    }

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    }

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

            <div className="header-section">
                <span>{getText(value, 'account')}:</span>
                {!authorized &&
                    <>
                        <button className="header-btn" type="button" onClick={handleSignUp}>{getText(value, 'signUp')}</button>
                        <button className="header-btn" type="button" onClick={handleSignIn}>{getText(value, 'signIn')}</button>
                    </>}
                {authorized &&
                    <>
                        <span>{user.name}</span>
                        <button className="header-btn" type="button" onClick={handleLogout}>
                            {getText(value, 'logOut')}
                        </button>
                    </>
                }
            </div>
        </div>
    )
}