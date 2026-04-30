import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="LDS Taste Buds logo" />

            <div className="footer-links">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy-policy">Privacy</Link>
                <Link to="/community-guidelines">Guidelines</Link>
                <Link to="/safety-tips">Safety</Link>
                <Link to="/refund-policy">Refunds</Link>
                <Link to="/no-affiliation">No Affiliation</Link>
                <a href="mailto:LDSTasteBuds@gmail.com">Contact</a>
            </div>

            <div className="socials">
                <a href="https://instagram.com" target="_blank">Instagram</a>
                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                <a href="https://twitter.com" target="_blank">Twitter/X</a>
            </div>

            <p>© {new Date().getFullYear()} LDS Taste Buds. All rights reserved.</p>
        </footer>
    );
}