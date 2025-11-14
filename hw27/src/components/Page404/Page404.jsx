import './Page404.css';

export default function Page404() {
    return (
        <div className="page404-container">
            <h1 className="page404-heading">404</h1>
            <p className="page404-message">Oops! The page you are looking for does not exist.</p>
            <a href="/" className="page404-link">Go back to Home</a>
        </div>
    );
}
