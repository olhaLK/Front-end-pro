import { useContext, useState } from "react";
import './Form.css';
import { useNavigate } from "react-router";
import { getText, LanguageContext, ThemeContext } from "../../contexts/contexts";


export default function Form({ onSave }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const nameRegEx = /^[A-Z][a-z]{1,9}$/;
    const surnameRegEx = /^[A-Z][a-z]{1,14}$/;
    const phoneRegEx = /^\d{10,12}$/;

    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    console.log('Current language:', language);
    console.log('Current theme:', theme);

    const fieldConfig = {
        name: {
            regEx: nameRegEx,
            setValue: setName,
            setError: setNameError,
            requiredAlert: getText(language, 'nameRequired'),
            invalidAlert: getText(language, 'nameInvalid'),
        },
        surname: {
            regEx: surnameRegEx,
            setValue: setSurname,
            setError: setSurnameError,
            requiredAlert: getText(language, 'surnameRequired'),
            invalidAlert: getText(language, 'surnameInvalid'),
        },
        phone: {
            regEx: phoneRegEx,
            setValue: setPhone,
            setError: setPhoneError,
            requiredAlert: getText(language, 'phoneRequired'),
            invalidAlert: getText(language, 'phoneInvalid'),
        },
    }

    function validateField(value, { regEx, setValue, setError, requiredAlert, invalidAlert }) {
        setValue(value);
        if (value === '') {
            setError(requiredAlert);
        } else if (!regEx.test(value)) {
            setError(invalidAlert);
        } else {
            setError('');
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        const config = fieldConfig[name];
        if (config) {
            validateField(value, config);
        }
    }

    const isNameValid = nameRegEx.test(name);
    const isSurnameValid = surnameRegEx.test(surname);
    const isPhoneValid = phoneRegEx.test(phone);

    const validData = isNameValid && isSurnameValid && isPhoneValid;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullname = `${name} ${surname}`;

        const newContact = {
            id: Date.now(),
            name: fullname,
            phone: phone,
        }

        onSave(newContact);

        setName('');
        setSurname('');
        setPhone('');
        navigate('/');
    }

    return (
        <div className={`content ${theme === 'dark' ? 'content-dark' : 'content-light'}`}>
            <h3>{getText(language, 'add')}</h3>
            <form onSubmit={handleSubmit}>
                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                <input type="text" name="name" value={name} placeholder={getText(language, 'name')} onChange={handleChange} />
                {surnameError && <div style={{ color: 'red' }}>{surnameError}</div>}
                <input type="text" name="surname" value={surname} placeholder={getText(language, 'surname')} onChange={handleChange} />
                {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                <input type="tel" name="phone" value={phone} placeholder={getText(language, 'phone')} onChange={handleChange} />
                <div className="btn">
                    <button type="button" className="btn-cancel" onClick={() => navigate('/')}>{getText(language, 'cancel')}</button>
                    <button type="submit" className="btn-save" disabled={!validData}>{getText(language, 'save')}</button>
                </div>
            </form>
        </div>
    )
}