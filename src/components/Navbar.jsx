import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={logo} alt="LDS Taste Buds logo" className="nav-logo" />
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/community-guidelines">Guidelines</Link>
                <Link to="/safety-tips">Safety</Link>
                <Link to="/privacy-policy">Privacy</Link>
            </div>
        </nav>
    );
}