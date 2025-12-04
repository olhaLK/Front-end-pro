import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <button type="button" onClick={handleClick}>Menu</button>
    )
}