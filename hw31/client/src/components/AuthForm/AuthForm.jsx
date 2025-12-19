import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginAsync } from "../../store/features/auth";
import "./AuthForm.css";


const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  login: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
})

export default function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, status } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated])

  const formik = useFormik({
    initialValues: {
      email: '',
      login: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginAsync(values));
    },
  })

  const handleCancel = () => {
    navigate('/');
  }

  return (
    <div className="AuthForm">
      <h2>Sign in</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-group">
          {formik.touched.login && formik.errors.login && (
            <div className="error-message">{formik.errors.login}</div>
          )}
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            name="login"
            placeholder="Enter login"
            value={formik.values.login}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-group">
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={status === "loading"}>
            {status === "loading"} Save
          </button>

          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
