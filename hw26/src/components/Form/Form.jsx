import { useRef, useState } from "react";
import './Form.css';


export default function Form({ onClose, onSave }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const nameRegEx = /^[A-Z][a-z]{1,9}$/;
    const surnameRegEx = /^[A-Z][a-z]{1,14}$/;
    const phoneRegEx = /^\d{10,12}$/;

    const fieldConfig = {
        name: {
            regEx: nameRegEx,
            setValue: setName,
            setError: setNameError,
            requiredAlert: 'Name is required',
            invalidAlert: 'Must start with capital and be 2-10 letters',
        },
        surname: {
            regEx: surnameRegEx,
            setValue: setSurname,
            setError: setSurnameError,
            requiredAlert: 'Surname is required',
            invalidAlert: 'Must start with capital and be 2-15 letters',
        },
        phone: {
            regEx: phoneRegEx,
            setValue: setPhone,
            setError: setPhoneError,
            requiredAlert: 'Phone is required',
            invalidAlert: 'Must be 10-12 digits',
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
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Add Contact</h3>
                <form onSubmit={handleSubmit}>
                    {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                    <input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
                    {surnameError && <div style={{ color: 'red' }}>{surnameError}</div>}
                    <input type="text" name="surname" value={surname} placeholder="Surname" onChange={handleChange} />
                    {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                    <input type="tel" name="phone" value={phone} placeholder="380 000 000 000" onChange={handleChange} />
                    <div className="btn">
                        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-save" disabled={!validData}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}