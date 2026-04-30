import { Link } from "react-router-dom";
import "./Legal.css";

export default function SafetyTips() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>Safety Tips</h1>

                <p>
                    LDS Taste Buds connects users for dinner groups and social events. Your safety is
                    your responsibility. Please follow these safety tips when using the Service.
                </p>

                <h2>1. Protect Your Personal Information</h2>
                <ul>
                    <li>Do not share financial details, home addresses, or sensitive personal data.</li>
                    <li>Use in-app messaging until you feel comfortable.</li>
                    <li>Limit identifiable information in your profile.</li>
                </ul>

                <h2>2. Stay Safe During In-Person Meetings</h2>
                <ul>
                    <li>Meet in public, well-lit places such as restaurants or community spaces.</li>
                    <li>Tell a friend or family member where you are going.</li>
                    <li>Arrange your own transportation.</li>
                    <li>Leave immediately if you feel uncomfortable.</li>
                </ul>

                <h2>3. Verify and Communicate</h2>
                <ul>
                    <li>Take reasonable steps to confirm who you are meeting.</li>
                    <li>Set boundaries before attending.</li>
                    <li>Report suspicious or inappropriate behavior.</li>
                </ul>

                <h2>4. Stay Sober and Alert</h2>
                <p>
                    Alcohol consumption is against LDS Taste Buds dinner policies. Stay alert, follow
                    the Word of Wisdom, and keep personal belongings secure.
                </p>

                <h2>5. Online Safety</h2>
                <ul>
                    <li>Beware of scams or requests for money.</li>
                    <li>Use a strong password.</li>
                    <li>Never share login credentials.</li>
                </ul>

                <h2>6. Emergency Resources</h2>
                <p>
                    If you are in immediate danger, contact emergency services. For platform concerns,
                    contact <strong>LDSTasteBuds@gmail.com</strong>.
                </p>

                <p className="legal-note">
                    LDS Taste Buds does not conduct background checks or verify user identities. You
                    are solely responsible for your interactions and safety.
                </p>
            </section>
        </main>
    );
}