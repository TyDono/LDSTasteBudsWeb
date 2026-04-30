import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

const APPLE_STORE_URL =
    "https://apps.apple.com/us/app/lds-taste-buds/id6749934342";

const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.ldstastebuds.app";

function getStoreLink() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return GOOGLE_PLAY_URL;
    }

    return APPLE_STORE_URL;
}

export default function Footer() {
    const storeLink = getStoreLink();

    return (
        <footer className="footer">
            <img src={logo} alt="LDS Taste Buds logo" />

            <div className="footer-download">
                <a
                    href={storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                >
                    Download LDS Taste Buds
                </a>
            </div>

            <div className="footer-links">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy-policy">Privacy</Link>
                <Link to="/community-guidelines">Guidelines</Link>
                <Link to="/safety-tips">Safety</Link>
                <Link to="/refund-policy">Refunds</Link>
                <Link to="/no-affiliation">No Affiliation</Link>
                <a href="mailto:LDSTasteBuds@gmail.com">Contact</a>
            </div>

            {/* <div className="socials">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter/X
                </a>
            </div> */}

            <p>© {new Date().getFullYear()} LDS Taste Buds. All rights reserved.</p>
        </footer>
    );
}