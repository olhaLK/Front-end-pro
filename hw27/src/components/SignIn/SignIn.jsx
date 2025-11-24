import './SignIn.css';
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { getText, LanguageContext, ThemeContext, UserContext } from "../../contexts/contexts";
import { useContext } from "react";
import * as Yup from 'yup';


const SignInScheme = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
})


export default function SignIn() {
    const { value } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: SignInScheme,
        onSubmit: values => {
            const storedUser = localStorage.getItem('user');
            if (!storedUser) {
                alert(getText(value, 'alertUser'));
                return;
            }

            const userData = JSON.parse(storedUser);

            if (values.login !== userData.login || values.password !== userData.password) {
                alert(getText(value, 'alertSignIn'));
                return;
            }

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            navigate('/');
        },
    })

    return (
        <form className="auth-form" onSubmit={formik.handleSubmit}>
            <h2>Sign In</h2>
            <div>
                {formik.errors.login && <div className='error-message'>{formik.errors.login}</div>}
                <label htmlFor="login">{getText(value, 'login')}</label>
                <input
                    type="text"
                    name="login"
                    placeholder={getText(value, 'login')}
                    value={formik.values.login}
                    onChange={formik.handleChange}
                />
            </div>

            <div>
                {formik.errors.password && <div className='error-message'>{formik.errors.password}</div>}
                <label htmlFor="password">{getText(value, 'password')}</label>
                <input
                    type="password"
                    name="password"
                    placeholder={getText(value, 'password')}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </div>

            <button type="button" onClick={() => navigate('/')}>{getText(value, 'cancel')}</button>
            <button type="submit">{getText(value, 'signIn')}</button>

        </form>
    )
}