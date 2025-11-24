import { createContext } from "react";

export const defaultLanguage = 'en';
export const defaultTheme= 'light';
export const defaultUser = null;

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
        notFoundMessage: 'Oops! The page you are looking for does not exist.',
        backHome: 'Go back to Home',

        login: 'Login',
        password: 'Password',
        repeatPassword: 'Repeat password',
        signUp: 'Sign up',
        signIn: 'Sign in',
        account: 'Account',
        logOut: 'Log Out',

        role: 'Role',
        gender: 'Gender',
        female: 'F',
        male: 'M',
        email: 'E-mail',
        agreementText: 'I agree to share my personal data.',
        admin: 'admin',
        user: 'user',

        alertUser: 'User not found. Please register first.',
        alertSignIn: 'Incorrect login or password.',
        alertAuth: 'To view the phone book, you must log in.',
        loginExists: 'User with this login already exists',
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
        notFoundMessage: 'На жаль, такої сторінки не існує.',
        backHome: 'Повернутися на головну',

        login: 'Логін',
        password: 'Пароль',
        repeatPassword: 'Повторіть пароль',
        signUp: 'Зареєструватися',
        signIn: 'Увійти',
        account: 'Акаунт',
        logOut: 'Вийти',

        role: 'Роль',
        gender: 'Стать',
        female: 'Ж',
        male: 'Ч',
        email: 'Пошта',
        agreementText: 'Я погоджуюсь на обробку моїх персональних даних.',
        admin: 'адмін',
        user: 'користувач',

        alertUser: 'Користувача не знайдено. Спочатку зареєструйтесь.',
        alertSignIn: 'Невірний логін або пароль.',
        alertAuth: 'Щоб переглянути телефонну книгу, вам потрібно увійти в систему.',
        loginExists: 'Користувач із цим логіном вже існує',
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

export const UserContext = createContext({
  user: defaultUser,
  setUser: () => {},
})