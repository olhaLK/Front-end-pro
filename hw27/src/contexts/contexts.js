import { createContext } from "react";

export const defaultLanguage = 'en';
export const defaultTheme= 'light';

export const texts = {
    en: {
        add: 'Add new contact',
        name: 'Name',
        surname: 'Surname',
        phone: 'Phone',
        actions: 'Actions',
        delete: 'Delete',
        theme: 'Theme',
        language: 'Language',
        cancel: 'Cancel',
        save: 'Save',
        nameRequired: 'Name is required',
        nameInvalid: 'Name must start with a capital letter and be between 2-10 characters',
        surnameRequired: 'Surname is required',
        surnameInvalid: 'Surname must start with a capital letter and be between 2-15 characters',
        phoneRequired: 'Phone is required',
        phoneInvalid: 'Phone must be 10-12 digits',
    },
    ua: {
        add: 'Додати контакт',
        name: "Ім'я",
        surname: 'Фамілія',
        phone: 'Телефон',
        actions: 'Дії',
        delete: 'Видалити',
        theme: 'Тема',
        language: 'Мова',
        cancel: 'Скасувати',
        save: 'Зберегти',
        nameRequired: 'Ім\'я обов\'язкове',
        nameInvalid: 'Ім\'я повинно починатися з великої літери та бути від 2 до 10 символів',
        surnameRequired: 'Прізвище обов\'язкове',
        surnameInvalid: 'Прізвище повинно починатися з великої літери та бути від 2 до 15 символів',
        phoneRequired: 'Телефон обов\'язковий',
        phoneInvalid: 'Телефон повинен містити від 10 до 12 цифр',
    },
}


export const LanguageContext = createContext({
    language: defaultLanguage,
    changeLanguage: () => {},  
})

export const ThemeContext = createContext({
    theme: defaultTheme,
    changeTheme: () => {},  
})

export const getText = (language, key) => {
    const currentLanguage = texts[language] || texts.en;  
    return currentLanguage[key] || `Missing translation for '${key}'`; 
}
