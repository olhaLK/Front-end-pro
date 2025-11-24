import './SignUp.css';
import { useFormik } from "formik";
import { getText, LanguageContext, ThemeContext, UserContext } from "../../contexts/contexts";
import { useContext } from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup';


const SignUpScheme = Yup.object({
    name: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(15, 'Must be shorter than 15 characters')
        .required('Required'),
    login: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(15, 'Must be shorter than 15 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm your password'),
    agreement: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required')
})

export default function SignUp() {
    const { value } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            login: '',
            role: 'admin',
            gender: 'F',
            email: '',
            phone: '',
            password: '',
            repeatPassword: '',
            agreement: false,
        },
        validationSchema: SignUpScheme,
        onSubmit: values => {
            const userData = {
                name: values.name,
                login: values.login,
                role: values.role,
                gender: values.gender,
                email: values.email,
                phone: values.phone,
                password: values.password,
            }

            localStorage.setItem('user', JSON.stringify(userData)); 
            setUser(userData);                             
            navigate('/'); 
        },
    })

    return (
        <form className='reg-form' onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>

            <div>
                {formik.errors.name && <div className='error-message'>{formik.errors.name}</div>}
                <label htmlFor="name">{getText(value, 'name')}</label>
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        placeholder={getText(value, 'name')}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
            </div>

            <div>
                {formik.errors.login && <div className='error-message'>{formik.errors.login}</div>}
                <label htmlFor="login">{getText(value, 'login')}</label>
                <div className="input-container">
                    <input
                        type="text"
                        name="login"
                        placeholder={getText(value, 'login')}
                        value={formik.values.login}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="role">{getText(value, 'role')}</label>
                <div className="input-container">
                    <select
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        className="role-select"
                    >
                        <option value="admin">{getText(value, 'admin')}</option>
                        <option value="user">{getText(value, 'user')}</option>
                    </select>
                </div>
            </div>

            <div>
                <label>{getText(value, 'gender')}</label>
                <div className="input-container">

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="F" 
                            checked={formik.values.gender === 'F'}
                            onChange={formik.handleChange}
                        />
                        {getText(value, 'female')}
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            checked={formik.values.gender === 'M'}
                            onChange={formik.handleChange}
                        />
                        {getText(value, 'male')}
                    </label>
                </div>
            </div>

            <div>
                {formik.errors.email && <div className='error-message'>{formik.errors.email}</div>}
                <label htmlFor="email">{getText(value, 'email')}</label>
                <div className="input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder={getText(value, 'email')}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div>
                {formik.errors.phone && <div className='error-message'>{formik.errors.phone}</div>}
                <label htmlFor="phone">{getText(value, 'phone')}</label>
                <div className="input-container">

                    <input
                        type="tel"
                        name="phone"
                        placeholder={getText(value, 'phone')}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div>
                {formik.errors.password && <div className='error-message'>{formik.errors.password}</div>}
                <label htmlFor="password">{getText(value, 'password')}</label>
                <div className="input-container">

                    <input
                        type="password"
                        name="password"
                        placeholder={getText(value, 'password')}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div>
                {formik.errors.repeatPassword && <div className='error-message'>{formik.errors.repeatPassword}</div>}
                <label htmlFor="repeatPassword">{getText(value, 'repeatPassword')}</label>
                <div className="input-container">
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder={getText(value, 'repeatPassword')}
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div>
                {formik.errors.agreement && <div className='error-message'>{formik.errors.agreement}</div>}
                <div className="input-container">

                    <label>
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={formik.values.agreement}
                            onChange={formik.handleChange}
                        />
                        {getText(value, 'agreementText')}
                    </label>
                </div>
            </div>

            <button type="button" onClick={() => navigate('/')}>{getText(value, 'cancel')}</button>
            <button type="submit">{getText(value, 'signUp')}</button>

        </form>
    )

}